const mongoose=require('mongoose');
mongoose
  .connect("mongodb://0.0.0.0:27017/userInformation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" congrats! connection successfully ");
  })
  .catch((err) => {
    console.log({err,message:"Connection failed"});
  });