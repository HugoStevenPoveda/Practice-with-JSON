const {Router}=require('express');
const router=Router();

const movies =require('../sample.json');


router.get('/',(req,res)=>{

    res.json(movies);
})

router.post('/',(req,res)=>{
           /*  console.log(req.body); */
 const {  title, director,año}= req.body;

   
     if( title && director && año){

          const id =movies.length +1;

          const newMovies={...req.body,id};
         movies.push(newMovies);
         res.json( movies);
         

     }else{
        res.send('wrong request');
     }  
})











module.exports=router;