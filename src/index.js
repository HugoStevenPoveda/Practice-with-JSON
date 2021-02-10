const express =require('express');
const app=express();
const morgan =require('morgan');


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))




//setting
app.set('port', process.env.PORT || 3000)
app.set('json spaces',2);






// starting server

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)});