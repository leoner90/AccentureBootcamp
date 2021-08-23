//LIBRARIES
// import express
const express = require("express");
// import cors to connect between diferent servers , in our case diferenet localhost port
const cors = require("cors");
// import routes
const Router = require("./routes/router.js");
 // init express
 const app = express();
// use express json
app.use(express.json())

const fileUpload = require('express-fileupload'); 
app.use(fileUpload());

//SESSION LIBRARIES AND SETUPS
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false ,
    SameSite: 'None',
}));

// USE CORS
app.use(cors({
  origin: 'http://localhost:4545',
  credentials: true
}))

// USE ROUTER
app.use(Router);
 
// //START SERVER LISTENER
const port = 3000;
app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});