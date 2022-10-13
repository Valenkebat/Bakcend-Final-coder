const router = require("express").Router();

const SessionRouter = require("./sessionRouter");
const ProductsRouter = require("./productsRouter");
const ChatRouter = require("./chatRouter"); //lo manejo desde app.js porque me da error
const InfoRouter = require("./infoRouter");
const CarritosRouter = require("./carritosRouter");


    router.use("/", SessionRouter);
    router.use("/productos", ProductsRouter);
    router.use("/chat",ChatRouter);
    router.use("/",InfoRouter);
    router.use("/carritos",CarritosRouter);
    
module.exports = router;