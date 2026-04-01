const express = require("express");
const { dbConnect } = require("./config/database");
const app = express();
const User = require("./models/user");
//added middleware to convert json into javascript object
app.use(express.json());

app.get("/user", async (req, res) => {
  try {
    const userDetails = await User.find({ emailId: req.body.emailId });

    if (userDetails.length === 0) {
      res.send("user is not available please enter proper mail id");
    } else {
      res.send(userDetail);
    }
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});

app.post("/signup", async (req, res) => {
  const User = new User(req.body);
  try {
    await User.save();
    res.send("data saved succesfully..");
  } catch (err) {
    res.send("error occured");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (err) {
    res.status(400).send("error occured in feed api");
  }
});


app.get('/findbyMailId',async(req,res)=>{
 const userBymailId=await User.findOne({emailId:req.body.emailId})
 res.send(userBymailId)



 
})
dbConnect()
  .then(() => {
    console.log("connected to database succesfull...");

    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("dbconnection failed");
  });
