// // import express
const express = require("express");

// //CONTROLLERS
const Authorisation = require("../app/controllers/AuthorisationController");
const AuthorisationCtrl = new Authorisation();
const BlogController = require("../app/controllers/BlogController");
const BlogCtrl = new BlogController();

// init express router
const router = express.Router();

// Get All BLOGS
router.post('/getAllBlogs', async (req, res) => {
   let result =  await BlogCtrl.GetBlogsController(req, res);
   res.status(200).json(result)
})

// Get BLOG BY ID (REDO)
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
      //TODO return error
   }
})

// GET LAST 3 BLOGS FOR HOME PAGE
router.get('/getLastBlogs', async (req, res) => {
   let result =  await BlogCtrl.GetLastBlogsController(req, res);
   res.status(200).json(result)
})
 
// DELETE BLOD BY ID
router.post("/deleteBlog", async function (req, res) {
   let UserLogedIn = await AuthorisationCtrl.IsUserLogedInController(req, res);
   if(UserLogedIn){
      let result =  await BlogCtrl.DeletePostController(req, res);
      res.status(200).json(result)
   } else {
      //TODO return error
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
      //TODO return error
   }
})

//LOG OUT A USER
 router.post("/logOut", async function  (req, res) { 
   let result = await AuthorisationCtrl.logOutController(req, res);
   res.status(200)
 })

module.exports = router;