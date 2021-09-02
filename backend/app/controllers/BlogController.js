//MODULE REQUIRE
const BlogModel = require("../models/BlogModel");

class BlogController {
  async AddNewBlogController(req, res) {
   return await BlogModel.AddNewBlogModel(req );
  }
  //GET ALL BLOGS OR ALL BLOGS OF SPECIFIED USER  
  async GetBlogsController(req, res) {
    return await BlogModel.GetBlogsModel(req);
  }
  async UserBlogsController(req, res)  {
    return await BlogModel.UserBlogsModel(req);
  }
  //GET LAST 3 BLOGS  FOR HOME PAGE
  async GetLastBlogsController(req, res) {
    return await BlogModel.GetLastBlogsModel(req);
  }
  //GET BLOGS TO EDIT 
  async GetBlogToEditController(req, res) {
    return await BlogModel.GetBlogToEditModel(req);
  }
  //GET BLOGS BY ID  
  async GetBlogByIdController(req, res) {
    return await BlogModel.GetBlogByIdModel(req);
  }
  //DELETE BLOG BY ID
  async DeletePostController(req,res){
    return await BlogModel.DeletePostModel(req);
  }
  //UPDATE BLOG BY ID
  async SaveBlogController(req, res) {
    return await BlogModel.SaveBlogModel(req);
  }
}
module.exports = BlogController;