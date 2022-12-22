import { connect } from "../../../dbConnect";
import { User } from "../../../modals/auth/authmodel";


export default async function handler(req, res) {
  const { method } = req;

  // console.log(email,password);

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "GET"){
try{
  
  const user = await User.find({ role:"teacher" });

    return res.status(200).send(user);
}
catch(err){
  res.status(400).send({message:err.message});
}
  }
}
