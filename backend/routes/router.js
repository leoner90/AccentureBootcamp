// // import express
const express = require("express");
// init express router
const router = express.Router();

// //CONTROLLERS
const Authorisation = require("../app/controllers/AuthorisationController");
const AuthorisationCtrl = new Authorisation();
const BlogController = require("../app/controllers/BlogController");
const BlogCtrl = new BlogController();




router.post('/getAllThisUserBlogs', async (req, res) => {
   let result =  await BlogCtrl.UserBlogsController(req, res);
   res.status(200).json(result)
})

// Get All BLOGS
router.post('/getAllBlogsByLimit', async (req, res) => {
   let result =  await BlogCtrl.GetBlogsController(req, res);
   res.status(200).json(result)
})

// Get BLOG BY ID
router.post('/getBlogToEdit', async (req, res) => {
   let result =  await BlogCtrl.GetBlogToEditController(req, res);
   res.status(200).json(result)
})

// Get BLOG BY ID
router.post('/getBlogByID', async (req, res) => {
   let result =  await BlogCtrl.GetBlogByIdController(req, res);
   res.status(200).json(result)
})

// UPDATE EXISTING BLOG BY ID
router.post('/saveBlog', async (req, res) => {
   let UserLogedIn = await AuthorisationCtrl.IsUserLogedInController(req, res);
   if(UserLogedIn){
      let result =  await BlogCtrl.SaveBlogController(req, res);
      res.status(200).json(result)
   } else {
      res.status(404)
   }
})

// DELETE BLOD BY ID
router.post("/deleteBlog", async function (req, res) {
   let UserLogedIn = await AuthorisationCtrl.IsUserLogedInController(req, res);
   if(UserLogedIn){
      let result =  await BlogCtrl.DeletePostController(req, res);
      res.status(200).json(result)
   } else {
      res.status(404)
   }
})

//USER REGISTRATION
router.post("/reg", async function (req, res) {
   let result =  await AuthorisationCtrl.RegistrationController(req, res);
   res.status(200).json(result)
})

//USER LOGIN
router.post("/login", async function (req, res) {
   let result =  await AuthorisationCtrl.LoginController(req, res);
   res.status(200).json(result)
 })

//CHECK IS USER LOGED IN OR NOT
router.post("/IslogedIn", async function  (req, res) { 
   let result = await AuthorisationCtrl.IsUserLogedInController(req, res);
   res.status(200).json(result)
 })

//ADD NEW BLOG
router.post("/AddBlog", async function  (req, res) {
   let UserLogedIn = await AuthorisationCtrl.IsUserLogedInController(req, res);
   if(UserLogedIn){
      let result = await BlogCtrl.AddNewBlogController(req, res);
      res.status(200).json(result)
   } else {
      res.status(404)
   }
})

//LOG OUT A USER
 router.post("/logOut", async function  (req, res) { 
   let result = await AuthorisationCtrl.logOutController(req, res);
   res.status(200).json(result);
 })

module.exports = router;