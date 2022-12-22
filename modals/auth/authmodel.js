

import { model, Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
   
   
  },
  password: {
    type: String,
 
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    default: "student"
  },
  gender: {
    type: String,
    enum: ["male", "female"]
  },
  verify: {
    type: Boolean,
    default: false
  }
});

const User = models.user || model("user", UserSchema);
export { User };