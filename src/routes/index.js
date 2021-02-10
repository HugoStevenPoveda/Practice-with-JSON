const {Router} = require('express');
const router =Router();


router.get('/',(req,res)=>{
    const nombre={"title":"hola hugo"}
    res.json(nombre);
})
router.get('/hola',(req,res)=>{
    const nombre={"nombre":" hugo",
                   "apellido":"poveda"
}
    res.json(nombre);
})

module.exports=router;