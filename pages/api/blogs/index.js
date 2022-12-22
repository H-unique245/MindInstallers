import { connect } from "../../../dbConnect";
import { BlogModel } from "../../../modals/blogs/blogmodel";


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
  
  const blogList = await BlogModel.find();

    return res.status(200).send(blogList);
}
catch(err){
  res.status(400).send({message:err.message});
}
  }
}
