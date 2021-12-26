const express = require('express');
const router = express.Router();


router.get('/' , function(req , res){
  res.render('factories' , {
    title: "Factory Names"
  });
});




module.exports = router;

