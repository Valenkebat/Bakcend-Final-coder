const router = require("express").Router();
const {passportAuthLogin, passportAuthRegister} = require('../middlewares/passport')
const {getLogin, postLogin, getLogout, getRegister, postRegister, getLoginError, getRegisterError} = require("../controllers/sessionController");

router.get("/login", getLogin);
router.post("/login", passportAuthLogin, postLogin);
router.get("/logout", getLogout);
router.get("/register", getRegister);
router.post("/register", passportAuthRegister ,postRegister);
router.get("/login-error", getLoginError);
router.get("/register-error", getRegisterError);
  
module.exports = router;