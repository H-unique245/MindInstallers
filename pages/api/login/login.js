import { connect } from "../../../dbConnect";
import { User } from "../../../modals/auth/authmodel";

import jwt from "jsonwebtoken";

export default async function handler(req, res) {


  const { email, password } = req.body;
  console.log(email,password);

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
try{
  
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(403).send({ message: "Invalid password" });
  }

  const token = jwt.sign(
    {
      
      id: user._id,
      email: user.email,
      password: user.password,
  
    },
    "BHKP",
    { expiresIn: "7 days" }
  );

  return res.send({ message: "login success", token });
}
catch(er){
  console.log(er);
}
}
}
