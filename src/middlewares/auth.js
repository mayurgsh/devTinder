const adminAuth=(req,res,next)=>{
 const token="xyz"
  const authorisedAdmin=token ==="xyz";
  if(!authorisedAdmin){
   res.status(401).send("you are unuthorised to admin page..")
  }
  else{
    next()
  }
}
module.exports={adminAuth}