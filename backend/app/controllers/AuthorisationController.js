//MODULE REQUIRE
const AuthorisationModel = require("../models/AuthorisationModel");

class AuthorisationController {
  // Function AuthorisationModel.isLogedIn check is user loged in and returns or user data or false
  async IsUserLogedInController(req , res) {
    const userInfo =  await AuthorisationModel.IsUserLogedInModel(req);
    return userInfo;
  }

  // ON REGISTRATION ATTEMPT
  async RegistrationController(req, res) {
    const ConditionRes = await AuthorisationModel.RegistrationModel(req , req.body);
    return ConditionRes;
  }

  // ON LOG IN ATTEMPT  
  async LoginController(req, res) {
    const ConditionRes = await AuthorisationModel.LogInModel(req , req.body); 
    return ConditionRes;
  }

  // LOG OUT , DESTROY SESSION
  async logOutController(req, res) {
    return await AuthorisationModel.LogOutModel(req);
  } 
}

module.exports = AuthorisationController;