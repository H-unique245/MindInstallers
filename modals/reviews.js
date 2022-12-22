const {Schema , model , models} = require("mongoose")

const reviewsShema = new Schema({
   massage : {
    type : "string"
   },
   name : {
      type : "string"
   },
   email : {
    type : "string"
   }
})

const reviewsModel =  model("reviews", reviewsShema)

module.exports = reviewsModel

