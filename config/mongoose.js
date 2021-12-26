//require the lib
const mongoose = require('mongoose');
// connecting to DB
mongoose.connect('mongodb://localhost/factory_list_db', 
           {useNewUrlParser: true, useUnifiedTopology: true} );

           //acquire the connection(to check if it is connnected)
const db = mongoose.connection;
//error
db.on('error' , console.error.bind(console,'error connecting to db:'));

// up and running then print the message
db.once('open' , function(){
 console.log('we are connected to the DB');
});

