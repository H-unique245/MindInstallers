// import { connect } from "../../../connect"
import { connect } from "../../../dbConnect";
import reviewsModel from "../../../modals/reviews"

console.log(reviewsModel)

 const handler = (async(req , res)=>{
     const {method} = req
   try {
    await connect();
  } catch (e) {
    console.log(e);
  }
  const {massage , name , email } = req.body
  console.log(massage , "i am here")
  if(method === POST){
    const newMassage = new reviewsModel({massage , name , email})
  }

})