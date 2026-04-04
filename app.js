
const express=require("express");
const app =  express();
const PORT=3000;
 
//motor de vistas 

app.set("view engine","ejs");
//archivos estaticos
app.use(express.static("public"));
//rutas
app.get ("/",(req,res)=>{
    res.render("inicio");
})

app.get ("/contacto",(req,res)=>{
    res.render("contacto");
})
app.get ("/sobre",(req,res)=>{
    res.render("sobre");
})

//servidor
app.listen(PORT,()=>{
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});