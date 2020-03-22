import Mongoose from "mongoose";
import db from "../config/configDB";

const comment = Mongoose.Schema({
  name: { type: String, default: "Anonymus User" },
  comment: String
});

const myCollection = db.model("Codesandbox", comment);
const newComment = new myCollection({ name: "Maruth", comment: "Super" });
newComment.save();
module.exports = myCollection;
