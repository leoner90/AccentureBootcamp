//LIBRARIES
const bcrypt = require('bcrypt');
const db = require("../../config/mysql-connection");
const jwt = require('jsonwebtoken');


class BlogModel {
  //DB CONNECT
  constructor() {
    this.__connection = new db('blogs');
  }
 
  //__ ADD NEW BLOG TO DB
  async AddNewBlogModel(req) {
    let newBlog = req.body;
    newBlog.creatorId = req.session.userId;
    //check for errors
    const errors = [];
    if(newBlog.BlogHeader == '' || newBlog.BlogBody == ''){
      errors.push("Fields Can't be empty");
    }
    // IF NO ERRORS -> ATTEMPT TO SAVE NEW BLOG
    if(errors.length == 0){
       await this.__connection.createBlog(newBlog);
       return ["Success msg"];
    } else {
      return errors;
    }
  }

  //Get All blogs  if userPosts == true , then return only this user posts using his ID
  async GetBlogsModel(req){
    let PostLimit = req.body.limit;
    if(req.body.UserPosts){
      let id = req.session.userId;
      return await this.__connection.getByKey('Creator_Id', id,);
    } else {
      return await this.__connection.getAll(PostLimit);
    } 
  }

  // GET LAST BLOG FROM DB FOR HOME PAGE
  async GetLastBlogsModel(req) {
    let PostLimit = req.body.limit;
    return await this.__connection.getAll(PostLimit)
  }

  //DELETE BLOG BY ID
  async DeletePostModel(req){
    let Userid = req.session.userId;
    let postToDelete = await this.__connection.getByKey('id_blogs' , req.body.id );
    if(postToDelete[0].Creator_Id == Userid) {
      return await this.__connection.delete(req.body.id);
    } else {
      return false;
    }    
  }

  //Get Blogs By id
  async GetBlogByIdModel(req){
    return await this.__connection.getByKey( 'id_blogs' , req.body.id);
  }
  
  //Update existing blogs
  async SaveBlogModel(req) {
    


    let Userid = req.session.userId;
    let postToDelete = await this.__connection.getByKey('id_blogs' , req.body.id );
    if(postToDelete[0].Creator_Id == Userid) {
      return await this.__connection.updatePost(req.body);
    } else {
      return false;
    } 
    
  }
}

//EXPORT CLASS
module.exports = new BlogModel();