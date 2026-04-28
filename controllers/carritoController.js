const { carrito, productos } = require("../data/store");

const carritoController = {
    
  mostrarCarrito: function (req, res) {
    const total = carrito.reduce((acc, item) => {
      return acc + item.producto.precio * item.cantidad;
    }, 0);

    res.render("carrito", { carrito, total });
  },

  agregarAlCarrito: function (req, res) {
    console.log("Contenido de req.body:", req.body);

    const seleccionados = req.body.productos || [];

    seleccionados.forEach((id) => {
      const producto = productos.find((p) => p.id === parseInt(id));

      // Si el producto ya existe en el carrito, se incrementa su cantidad.
      // Si no existe, se agrega como un nuevo item con cantidad 1
      if (producto) {
        const item = carrito.find((p) => p.producto.id === producto.id);

        if (item) {
          item.cantidad += 1;
        } else {
          carrito.push({ producto, cantidad: 1 });
        }
      }
    });

    res.redirect("/carrito");
  },

  sumar: function (req, res) {
    const id = parseInt(req.params.id);
    const item = carrito.find((p) => p.producto.id === id);

    if (item) {
      item.cantidad += 1;
    }

    res.redirect("/carrito");
  },

  restar: function (req, res) {
    const id = parseInt(req.params.id);
    const item = carrito.find((p) => p.producto.id === id);

    if (item) {
      if (item.cantidad > 1) {
        item.cantidad -= 1;
      } else {
        const nuevo = carrito.filter((p) => p.producto.id !== id);
        carrito.length = 0;
        carrito.push(...nuevo);
      }
    }

    res.redirect("/carrito");
  },

  eliminar: function (req, res) {
    const id = parseInt(req.params.id);
    const nuevo = carrito.filter((item) => item.producto.id !== id);

    carrito.length = 0;
    carrito.push(...nuevo);

    console.log("Carrito actualizado:", carrito);
    res.redirect("/carrito");
  },
};

module.exports = carritoController;

