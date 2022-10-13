const router = require("express").Router();
const {getProducts, postProducts} = require("../controllers/productsController");

    router.get("/",getProducts);
    router.post("/",postProducts);
module.exports = router;