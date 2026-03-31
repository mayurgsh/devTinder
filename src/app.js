const express = require("express");
const app = express();

const User=require("./models/user")
const {connectDb}=require('./config/database')

app.post("/signup",async(req,res)=>{
  const userObj={
    firstName:"gauri",
    lastName:"shinde",
    emailId:"gauri@gmail.com",
    age:34
  }
let user= new User(userObj)
try{

  await user.save()
  res.send("data saved succesfully..")
} catch(err){
  res.status(400).send("error occuere")
}

})
  
connectDb().then(()=>{
  console.log("database connection established")
  app.listen(3000, () => {
  console.log("server running on port 3000");
});
}).catch((err)=>{
console.log("connection failed")
})


