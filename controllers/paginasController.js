const paginasController={
    sobreMi: function(req,res){
        res.render("sobre");
    },
    contacto: function(req,res){
        res.render("contacto");
    },
}

module.exports=paginasController;