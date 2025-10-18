const express=require("express")
const mongoose = require('mongoose')
const cors=require("cors")
const UserModel=require('./Models/User')
const app=express();
app.use(express.json())
app.use(cors())
mongoose.connect()
app.post('/signup',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(person =>{
        if(person){
            if(person.password===password){
                res.json("Success")
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})
app.listen(5000,()=>{
    console.log("server is running");
})