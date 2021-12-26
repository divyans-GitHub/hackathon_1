const express = require('express');
const port = 4300;

const app = express();

app.get('/' , function(req , res){
  res.send("<h1>Cool , it is running</h1");
});

app.listen(port , function(err){
    if(err){console.log('error in running server' , err);}

    console.log("my express server is up and running on port: " , port);
})