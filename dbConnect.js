import mongoose from "mongoose";

export const connect = async () => {
  if(mongoose.connection.readyState[0]) return;
  mongoose.connect("mongodb+srv://mindinstallers:mindsms@cluster-sms.kdciz59.mongodb.net/sms");
};