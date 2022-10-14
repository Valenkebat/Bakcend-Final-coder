const router = require("express").Router();
const CarritosController = require("../controllers/carritosController");


    const carritosController = new CarritosController();
  
  
    router.get("/",carritosController.getCarritos);

    router.get("/:id/productos", carritosController.getCarritosById);

    router.post("/", carritosController.postCarritos);

    router.post("/:id/productos", carritosController.postById)

    router.delete("/:id",carritosController.deleteByIdCarritos);

    router.delete("/:id/productos/:idProd", carritosController.deleteProdById)

module.exports = router;
