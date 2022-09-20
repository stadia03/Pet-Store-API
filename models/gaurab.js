const mongoose = require('mongoose')


const gaurabschema = new mongoose.Schema({

     Id : { 
        type : Number  , required :true 
     } ,  
     pet_name : {
        type : String , required :  true
    } ,  
     owner_name : {
        type : String,required : true 
    } ,
     age :{
        type : Number, required : true
    } , 
     breed : {
        type: String, required : true
    } , 
     gender:  {
        type: String, required : true
    } 

})

//gaurabschema.set('validateBeforeSave', false);
// const mine = mongoose.model("Gaurab",gaurabschema)
module.exports = mongoose.model('gaurab',gaurabschema) //exporting this schema to app.js

// module.exports.mine = mine


