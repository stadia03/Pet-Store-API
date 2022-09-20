const express= require('express')
// const { addListener } = require('../models/gaurab')
const router = express.Router()   //router is an object from express module  : )

const Gaurab = require("../models/gaurab") // creating a handle named "Gaurab"   ...including the schema (database if you call in layman )

//get request for all fields
router.get('/',async(req,res)=> {  //to provide the data from server or to print the data to user
   try{

    const gaurabb = await Gaurab.find() // we are using "await " funtion to stop the nodejs "single" thread untill data is fetched ! and
                                                                                       // saving to to a const gaurab
    res.json(gaurabb)  // if we directly send the data it will print in plain txt format or something, but we want JSON format 
    }catch (err){
    res.send('Error_gaurab'+err.stack)
   }
})

//get request for specific field 

router.get('/:id',async(req,res)=>{
    try{
        const single_field=await Gaurab.findById(req.params.id)
        res.json(single_field)
    }catch(err){
        res.send("Not avaliable")
    }


})

router.post('/',async(req,res) =>{
   // console.log("inside the funtion")
   
    const gaurabb = new Gaurab({  //we created a new object of schema or by this type we can take the input from user
        
            Id : req.body.Id,
            pet_name: req.body.pet_name,
            owner_name : req.body.owner_name,
            age : req.body.age,
            breed : req.body.breed,
            gender : req.body.gender
    })

    try{
        const data1= gaurabb.save()
       // res.send("success ")
        res.json(data1)
    }catch(err){
        res.send("error _ gaurab"+err.stack)
    }
})

router.patch('/:id',async (req,res)=>{
    try{
    const single_field= await Gaurab.findById(req.params.id)
   
    single_field.owner_name=req.body.owner_name
  //  single_field.age =req.body.age
    const output=await single_field.save()
    res.json(output)
    }catch(err){
        res.send("Error"+err)
    }

})

router.delete('/:id', async(req,res)=>{
    try{
    const single_field = await Gaurab.findById(req.params.id)
    single_field.delete()
    res.send("successfully deleted!")
    }catch(err){
        res.send("Error"+err)
    }

})


module.exports =router

