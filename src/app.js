const express = require("express");
const app = express();

app.use("/user", (req, res,next) => {
  console.log("response 1 called");
  res.send("response 1");
  next()
},(req,res)=>{
  console.log("response 2 called")
  // res.send("response 2")  
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
