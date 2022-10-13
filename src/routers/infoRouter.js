const router = require("express").Router();
const {getInfo} = require("../controllers/infoController");

  

    //Info
    router.get("/info", getInfo);

module.exports = router;
