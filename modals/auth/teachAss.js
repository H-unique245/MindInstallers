

import { model, Schema, models } from "mongoose";

const teacherAssign = new Schema({
    id: {
        type: Number,
       
       
      },
  name: {
    type: String,

  },
 
  status: {
    type: Boolean,
    default: false
 
  },
  link: {
    type: String,
   
  },
  
});

const Assignment = models.assignment || model("assignment", teacherAssign);
export { Assignment };