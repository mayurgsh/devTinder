const express=require('express')
const app=express()
// app.use("/",(req,res)=>{
//   res.send("hello from dashboard")
// })
app.use('/test',(req,res)=>{
res.send("Hello from Test added")
})
app.listen(3000,()=>{
  console.log("listning to server 3000 succesfully....")
})