import { connect } from "../../../dbConnect";
import { User } from "../../../modals/auth/authmodel";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }


if (method === "DELETE") {
    try {
   
        
            // if (req.role !== "admin") {
            //   return res.status(403).send({ message: "You are not an admin" });
            // }
        
            const user = await User.findByIdAndDelete({ _id: id });
        
            return res.send({ message: "Deleted successfully", user });
        
          } 
          catch(error) {
            return res.status(404).send({ error: "Something went wrong" });
    } 
  }
  if (method === "PATCH") {
    try {
      const { id } = req.query;

      const {
       email,name,verify
      } = req.body;
  
      // if (req.role !== "admin") {
      //   return res.status(403).send({ message: "You are not an admin" });
      // }
  
      const user = await User.findByIdAndUpdate(
        id,
        {
          email,name,verify
        },
        { new: true }
      );
  
      return res.status(200).send({ user });
    } catch (error) {
      return res.status(404).send({ error: "Something went wrong" });
    }
  }
}