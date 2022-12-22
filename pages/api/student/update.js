import { connect } from "../../../dbConnect";
import { User } from "../../../modals/auth/authmodel";

export default async function handler(req, res) {
  const { method } = req;

  const { email, password } = req.body;
  // console.log(email,password);

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
try{
  
  const user = await User.findOne({ email });
console.log(user);
  if (!user) {
    return res.status(404).send({ message: "Please enter the correct email address" });
  }
if(user.password===password){
    // console.log('use different');
    res.status(200).send("Please Chooose different Passowrd")
  }
else{
    const newUser= await User.updateOne({email:user.email} ,{$set:{password:password},$currentDate: { lastModified: true }})
    console.log(newUser);
    return res.status(201).send("Password Changed Successfully!!");

}
}
catch(err){
  res.status(400).send({message:err.message});
}
}
}
