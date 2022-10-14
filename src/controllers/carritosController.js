const CarritosService = require("../services/carritosService");
const ProductsService = require("../services/productsService");

//--------------------------------------------
// permisos de administrador

const esAdmin = true;

function crearErrorNoEsAdmin(ruta, metodo) {
  const error = {
    error: -1,
  };
  if (ruta && metodo) {
    error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`;
  } else {
    error.descripcion = "no autorizado";
  }
  return error;
}

function soloAdmins(req, res, next) {
  if (!esAdmin) {
    res.json(crearErrorNoEsAdmin());
  } else {
    next();
  }
}

module.exports = class CarritosController {
  constructor() {
    this.carritos = new CarritosService();
    this.productos = new ProductsService();
  }

  getCarritos = (req, res) => {
    res.json( this.carritos.getCarritosService);
  };

  postCarritos = (req, res) => {
    res.json( this.carritos.saveCarritoService);
  };

  deleteByIdCarritos = (req, res) => {
    res.json(this.carritos.deleteByIdCarritoService(req.params.id));
  };

  //--------------------------------------------------
  // router de productos en carrito

  getCarritosById = (req, res) => {
    const carrito = this.carritos.getByIdCarritosService(req.params.id);
    res.json(carrito.productos);
  };

  postById = (req, res) => {
    const carrito = this.carritos.getByIdCarritosService(req.params.id);
    const producto = this.productos.getByIdProductService(req.body.id);
    carrito.productos.push(producto);
    this.carritos.updateCarritoService(carrito);
    res.end();
  };

  deleteProdById = (req, res) => {
    const carrito = this.carritos.getByIdCarritosService(req.params.id);
    const index = carrito.productos.findIndex((p) => p.id == req.params.idProd);
    if (index != -1) {
      carrito.productos.splice(index, 1);
      this.carritos.updateCarritoService(carrito);
    }
    res.end();
  };
};