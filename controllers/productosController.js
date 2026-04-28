const { productos } = require("../data/store");

const productosController ={
    listarProductos: function(req,res){
         res.render("inicio",{productos});
    },

}
module.exports=productosController;