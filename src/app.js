const express = require("express");
const app = express();


app.get('/user',(req,res)=>{
  res.send({firstname:"Mayur",lastName:"shinde"})
})

app.post('/user',(req,res)=>{
  res.send("data saved succesfully into database....")
})

app.delete('/user',(req,res)=>{
  res.send("user data deleted succesfully from database..")
})

app.listen(3000, () => {
  console.log("listning to server 3000 succesfully....");
});
