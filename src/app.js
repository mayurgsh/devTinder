const express=require('express')
const app=express()

app.get('/user',(req,res)=>{

  res.send({name:"mayur",address:"Akola"})
})

app.get('/user/:userId',(req,res)=>{
  console.log(req.params)
  res.send("please find here perticular user details here")
})





app.get('/home',(req,res)=>{
  res.send("this is home page...")
})
app.listen(3000,()=>{
  console.log("server running on port 3000")
})