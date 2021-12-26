const express = require('express');
const port = 4300;

const app = express();
app.set('view engine' , 'ejs');
app.use('/' , require('./routes') );
app.use(express.urlencoded());
app.use( express.static('assets'));










app.listen(port , function(err){
    if(err){console.log('error in running server' , err);}

    console.log("my express server is up and running on port: " , port);
})