const express = require("express");
const app = express();

// const authAdmin=()=>{
//   const token="xyz"
//   const authorisedAdmin=token ==="xyz";
//   if(!authorisedAdmin){
//    res.status(401).send("you are unuthorised to admin page..")
//   }
// }

const { adminAuth } = require("./middlewares/auth");
app.use("/admin", adminAuth);
app.get("/admin/getAllUserData", (req, res) => {
  res.send("All admin data recieved");
});

app.get("/admin/getAllUserData", (req, res) => {
  res.send("All admin data recieved");
});

app.post("/admin/saveAdminData", (req, res, next) => {
  res.send("Admin Data saved succesfully");
});

app.get("/user", (req, res, next) => {
  res.send("User data");
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});
