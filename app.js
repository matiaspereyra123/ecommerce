//Importamos dependencias  principales
const express=require("express");
// Permite usar DELETE y PUT en formularios HTML
const methodOverride = require("method-override");
const app =  express();
const PORT=3000;


// Importa el archivo productos.json  desde la carpeta data
// y lo asigna a la constante 'productos' para usarlo en el código
const { carrito, productos } = require("./data/store");

// Habilita el middleware para procesar datos enviados desde formularios HTML.
// Con extended:true usa la librería 'qs', lo que permite interpretar objetos y arrays en req.body.
app.use(express.urlencoded({ extended: true }));

// Middleware para interpretar _method en formularios y convertir POST → DELETE/PUT
app.use(methodOverride("_method"));

const carritoRoutes = require("./routes/carritoRoutes");
const productoRoutes= require("./routes/productoRoutes");
const paginasRoutes=require("./routes/paginasRoutes");
app.use("/", carritoRoutes);
app.use("/",productoRoutes);
app.use("/",paginasRoutes);




//motor de vistas 
app.set("view engine","ejs");

//archivos estaticos
app.use(express.static("public"));

//rutas




// Ruta POST de prueba



/*
app.post("/carrito/sumar/:id",(req,res)=>{
const id = parseInt(req.params.id);
const item = carrito.find(p => p.producto.id === id);
    if(item){
  item.cantidad += 1;
}
  res.redirect("/carrito");
});
*/



// Eliminar producto del carrito (DELETE): recibe el ID y lo filtra


// Mostrar carrito


app.get("/producto/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const  producto = productos.find(p=>p.id ===id);
   console.log("producto detalle: ",producto);
    if (!producto){
        return res.send("Producto no encontrado");
    }
     res.render ("producto",{producto});
});

//servidor
app.listen(PORT,()=>{
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});