const router = require("express").Router();
const {getChat} = require('../controllers/chatController')
    
router.get('/',getChat)

module.exports = router;


    

