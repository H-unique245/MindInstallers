import { model,models,Schema } from "mongoose";

const BlogSchema= new Schema({
    title: String,
    description: String,
    comments: { type : Array , "default" : [] 
}
})

const BlogModel = models.blogs || model('blogs',BlogSchema);

export {BlogModel};