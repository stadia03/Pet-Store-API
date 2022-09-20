const express = require('express')

const mongoose =require('mongoose')
const url = 'mongodb://localhost/dbgaurab' //connecting to database


const app=express()

mongoose.connect(url,{useNewUrlParser:true})  // connecting express to url

const con = mongoose.connection //creating an handler

con.on('open', function(){          //firing an event that is "on" including a function
    console.log("connected :) ..") } 
    
    )  
 
    app.use(express.json()) //telling the nodejs "hey i want to receive json format data from the user"  : )

const gaurabRouter = require('./routes/gaurab_routes')  // mentioning or including the router module which we have created

app.use('/gaurab_routes',gaurabRouter) //creating a middle wire, means for all gaurab request, it will be redirected to gaurabRouter -> to that module 
                                                                                                                         //which we have created!

app.listen(9000, ()=>{       //listening to server on port 9000
    console.log("Server Started...")
})
