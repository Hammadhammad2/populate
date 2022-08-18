import mongoose from "mongoose";
const profileSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  age: Number,
  address: String,
  gender: String,
  education: String,
  company: String,
  website: String,
});

const Profile = new mongoose.model("Profile", profileSchema);
export default Profile;
