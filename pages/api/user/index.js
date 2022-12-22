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


}