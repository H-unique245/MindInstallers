import { connect } from "../../../dbConnect";
import { User } from "../../../modals/auth/authmodel";

export default async function handler(req, res) {
  const { method } = req;
  const { name, email, password } = req.body;
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
    try {
      const check = await User.findOne({ email });
      if (check)
        return res
          .status(400)
          .send({ message: "User with provided email already exists" });

      const user = await User.create({ name, email,password });
      res.status(201).send({ message: "User Created", user });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}