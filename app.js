//Importamos dependencias  principales
const express=require("express");
// Permite usar DELETE y PUT en formularios HTML
const methodOverride = require("method-override");
const app =  express();
const PORT=3000;


// Importa el archivo productos.json desde la carpeta data
// y lo asigna a la constante 'productos' para usarlo en el código
const productos = require('./data/productos.json');


// Habilita el middleware para procesar datos enviados desde formularios HTML.
// Con extended:true usa la librería 'qs', lo que permite interpretar objetos y arrays en req.body.
app.use(express.urlencoded({ extended: true }));

// Middleware para interpretar _method en formularios y convertir POST → DELETE/PUT
app.use(methodOverride("_method"));

//carrito en memoria
let  carrito=[];


//motor de vistas 
app.set("view engine","ejs");

//archivos estaticos
app.use(express.static("public"));

//rutas
app.get ("/",(req,res)=>{
    res.render("inicio",{productos});
})

app.get ("/contacto",(req,res)=>{
    res.render("contacto");
})
app.get ("/sobre",(req,res)=>{
    res.render("sobre");
})

// Ruta POST de prueba
app.post("/carrito", (req, res) => {
  console.log("Contenido de req.body:", req.body);

  const seleccionados = req.body.productos || [];
  console.log("Array de productos seleccionados:", seleccionados);

  seleccionados.forEach(id => {
    const producto = productos.find(p => p.id === parseInt(id));
    if (producto) carrito.push(producto);
  });

  console.log("Carrito actualizado:", carrito);

  res.redirect("/carrito");
});

// Eliminar producto del carrito (DELETE): recibe el ID y lo filtra
app.delete("/carrito/:id", (req, res) => {
  const id = parseInt(req.params.id);
  carrito = carrito.filter(p => p.id !== id);

  console.log("Carrito actualizado:", carrito);

  res.redirect("/carrito");
});



// Mostrar carrito
app.get("/carrito", (req, res) => {
  res.render("carrito", { carrito });
});







//servidor
app.listen(PORT,()=>{
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});