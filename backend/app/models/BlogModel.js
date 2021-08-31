//LIBRARIES
const bcrypt = require('bcrypt');
const db = require("../../config/mysql-connection");
const jwt = require('jsonwebtoken');
var fs = require('fs');

class BlogModel {
  //DB CONNECT
  constructor() {
    this.__connection = new db('blogs');
  }
 
  //__ ADD NEW BLOG TO DB
  async AddNewBlogModel(req) {
    let imgFile = [];
    let EditingErr = [];
    if(req.files) {
       imgFile = req.files.file;
       //img check
       let fileExtensionName = imgFile.mimetype.split('/').pop();
       let pattern= new RegExp((/(gif|jpe?g|png|webp|bmp)$/i))
       !pattern.test(fileExtensionName)  ? EditingErr.push("Wron File Type") : null;
       imgFile.size > 4200000  ? EditingErr.push("File is tooooo big max 4mb") : null;
    } else {
      imgFile.name = "default.png";
    }
    //fields check
    let newBlog = JSON.parse(req.body.file2);
    newBlog.BlogHeader.length > 100 ? EditingErr.push("Header Max lenght 100 simbols") : null;
    newBlog.BlogBody.length > 65535 ? EditingErr.push("TEXT MAX 65,535 simbols") : null;
    if ( newBlog.BlogBody.length == 0  || newBlog.BlogHeader.length == 0) {
      EditingErr.push("No Blank Fields")
    }
    
    // IF NO ERRORS -> ATTEMPT TO SAVE NEW BLOG
    if(EditingErr.length == 0){
      if(req.files) {
        imgFile.mv(`${__dirname}/../../img/${imgFile.name}`, function (err) {
          if (err) {console.log(err)}
        });
      }
  
      newBlog.date  = new Date().toLocaleDateString();
      newBlog.creatorId = req.session.userId;
      await this.__connection.createBlog(newBlog, imgFile);
      return ["Success msg"];
    } else {
      return EditingErr;
    }
  }

  //Get All blogs  if userPosts == true , then return only this user posts using his ID
  async GetBlogsModel(req){
    let PostLimit = req.body.limit;
    let limitStart = req.body.limitStart
    let ASCorDESC = req.body.ASCorDESC
    if(req.body.UserPosts){
      let id = req.session.userId;
      let result = await this.__connection.getUserPostByID('Creator_Id', id,);
      if (result) {
        let fs = require('fs');
        for(let i = 0; i < result.rows.length ; i++) {
          const bitmap = fs.readFileSync(`${__dirname}/../../${result.rows[i].BlogImg}`);
          const base64 = new Buffer.from(bitmap).toString("base64");
          let obj = {data: base64}
          result.rows[i].img = obj;
        }
        return result;
      } else {
        return false;
      }
    } else {
      let result = await this.__connection.getAll(limitStart,PostLimit,ASCorDESC);
      let fs = require('fs');
      for(let i = 0; i < result.rows.length ; i++) {
        const bitmap = fs.readFileSync(`${__dirname}/../../${result.rows[i].BlogImg}`);
        const base64 = new Buffer.from(bitmap).toString("base64");
        let obj = {data: base64}
        result.rows[i].img = obj;
      }

      return result;
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
    let result = await this.__connection.getByKey( 'id_blogs' , req.body.id);
    if (result.length > 0) {
      const bitmap = fs.readFileSync(`${__dirname}/../../${result[0].BlogImg}`);
      const base64 = new Buffer.from(bitmap).toString("base64");
      result[0].BlogImg = base64;
    } else {
      return false
    }
    return result;
  }
  
  //Update existing blogs
  async SaveBlogModel(req) {
    let imgFile = [];
    let EditingErr = [];
    //fields check
    let ChangedBlog = JSON.parse(req.body.file2);
    ChangedBlog.BlogHeader.length > 100 ? EditingErr.push("Header Max lenght 100 simbols") : null;
    ChangedBlog.BlogBody.length > 65535 ? EditingErr.push("TEXT MAX 65,535 simbols") : null;
    if ( ChangedBlog.BlogBody.length == 0  || ChangedBlog.BlogHeader.length == 0) {
      EditingErr.push("No Blank Fields")
    }
    //Rights Check
    let Userid = req.session.userId;
    let postToDelete = await this.__connection.getByKey('id_blogs' , ChangedBlog.id );
    if(postToDelete[0].Creator_Id != Userid) {
      EditingErr.push("You Have no Rights to modify this Blog");
    }
    //If new File Uploaded -> check for errors
    if(req.files){
      imgFile = req.files.file;
      let fileExtensionName = imgFile.mimetype.split('/').pop();
      let pattern= new RegExp((/(gif|jpe?g|png|webp|bmp)$/i))
      !pattern.test(fileExtensionName)  ? EditingErr.push("Wron File Type") : null;
      imgFile.size > 4200000  ? EditingErr.push("File is tooooo big max 4mb") : null;
    }
    if(EditingErr.length == 0){   
      if(req.files){
        if(!postToDelete[0].BlogImg.includes("default.png") ){
          fs.unlinkSync(`${__dirname}/../../${postToDelete[0].BlogImg}`);
        } 
        imgFile.name = 'img/' + imgFile.name;
        imgFile.mv(`${__dirname}/../../${imgFile.name}`);
        
      } else {
        imgFile.name = postToDelete[0].BlogImg;
      }     
      return await this.__connection.updatePost(ChangedBlog , imgFile.name);
    } else {
      return EditingErr;
    }
  }
}

//EXPORT CLASS
module.exports = new BlogModel();