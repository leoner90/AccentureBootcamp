//LIBRARIES
const bcrypt = require('bcrypt');
const db = require("../../config/mysql-connection");
const jwt = require('jsonwebtoken');

class AuthorisationModel {
  //__ DB CONNECT
  constructor() {
    this.__connection = new db('users');
  }
  /* __ AssignPrivateAndPublicKey IS CALLED ON REGISTRATION OR ON LOG IN ATTEMPT , 
      ASSIGNS PUBLIC KEY AND USER ID TO SESSION AND PRIVATE KEY TO DATABASE, ALSO USER DATA TO JWT */
  async AssignPrivateAndPublicKey(login, email, userId, req) {
    //Get new Secret Api key for encrypting and decrypting (TO STORE IN DB)
    const SecretKey = require('crypto').randomBytes(64).toString('hex');
    //Data for insertion in "jwt" function
    const userInfo = {name: login , email: email } 
    //GENERATE NEW PUBLIC KEY (TO STORE IN USER SESSION) AND ASSIGN USER INFO TO JWT
    const accessToken = jwt.sign(userInfo , SecretKey);
    //USER API KEY UPDATE
    var x = await this.__connection.updateAPIkey( SecretKey , userId);
    //ASSIGN "PUBLIC KEY" AND "USER ID" TO SESSION VARIABLES
    req.session.token = accessToken;
    req.session.userId = userId;
  }

  // ___REGISTRATION
  async RegistrationModel(req , newStudentData) {   
    //CHECK FOR ERRORS
    const errors = [];
    let pattern  = new RegExp("^[A-Za-z0-9]{4,16}$");
    !pattern.test(newStudentData.login) ? errors.push('Login must contain only Letters or Numbers'):  null ; 
    pattern = new RegExp("^(?=.*[!@#$%^()*{}?_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$" );
    !pattern.test(newStudentData.password) ? errors.push('password must contain 1 Upper one Lower case and 5 simols + spec simbol'): null ; 
    !pattern.test(newStudentData.RepeatedPassword) ? errors.push('Repeated Password must contain 1 Upper one Lower case and 5 simols + spec simbol'): null ; 
    newStudentData.password != newStudentData.RepeatedPassword ? errors.push('Passwords Don\'t Match Server Err'): null ; 
    pattern = new RegExp("^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+.[a-zAZ]");
    !pattern.test(newStudentData.email ) ? errors.push('incorect email'):  null ; 

    //If user with such login exists -> error
    const DbUserData = await this.__connection.getByKey('Login',newStudentData.login);
    if( DbUserData.length > 0){
      errors.push("This login already exist");
    }
    // IF NO ERRORS -> ATTEMPT TO REGISTER USER
    if(errors.length == 0){
      //password hashing
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(newStudentData.password, salt);
      //password assign to object
      newStudentData.password = hashedPassword;
      //PUSH DATA TO DB AND RETURN LAST INSERTED ID (API KEY FIELD DEFAULT NULL)
      const lastUserInsertedId = await this.__connection.CreateUser(newStudentData);
      //ASSIGN PUBLIC KEY AND USER ID TO SESSION AND PRIVATE KEY TO DATABASE, ALSO USER DATA TO JWT 
      await this.AssignPrivateAndPublicKey(newStudentData.login, newStudentData.email , lastUserInsertedId, req);
      return true;
    } else {
      return errors;
    }
  }

  //__ LOGIN
  async LogInModel(req, user) {
    //CHECK FOR ERROR 
    const errors = [];
    const DbUserData = await this.__connection.getByKey('Login', user.login);
    if(DbUserData.length == 0){
      errors.push("login Or Password is incorrect");
    } else {
      if (!await bcrypt.compare(user.password, DbUserData[0].Password)){
        errors.push("login Or Password is incorrect");
      }
    }
    // IF NO ERRORS -> Log in
    if(errors.length == 0) {
      //ASSIGN PUBLIC KEY AND USER ID TO SESSION AND PRIVATE KEY TO DATABASE, ALSO USER DATA TO JWT 
      await this.AssignPrivateAndPublicKey(user.login,  DbUserData[0].Email , DbUserData[0].id_User  , req);
      return true;
    } else {
      return errors;
    }
  }

  // ___IsUserLogedIn  CHECK IS USER LOGED IN OR NOT BY API KEY
  async IsUserLogedInModel(req) { 
   //GET USER ID AND PUBLIC KEY FROM SESSION STORAGE
    var id = req.session.userId;
    var token = req.session.token;
    //IF TOKEN EXISTS
    if (token) {
      //GET PRIVATE KEY FROM USER DB
      const getUser = await this.__connection.getByKey('id_User',id);
      const apikey = await getUser[0].ApiKey;
      //VERIFY IS USER PRIVATE KEY == USER PUBLIC KEY
      return jwt.verify(token, apikey , (err, user) => {
        if (err == null) {
          //RETURN USER INFORMATION IF VERIFICATION SUCCEEDED
          return true;
        } else {
          //IS VERIFICATION FAILED RETURN FALSE
          return false;
        }
      })
    //IF NO TOKEN RETURN FALSE
    } else {
      return false;
    }
  }

 //____LOG OUT
 async LogOutModel(req) {
    //Destroy Session /deletete api key from user db
    var id = req.session.userId;
    await this.__connection.updateAPIkey( '' , id);
    req.session.destroy(function(error){
      console.log("Session Destroyed")
    })
    return false;
  }
}

//EXPORT CLASS
module.exports = new AuthorisationModel();