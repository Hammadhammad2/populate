import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  pictureId: { type: mongoose.Schema.Types.ObjectId, ref: "Picture" },
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

const User = new mongoose.model("User", userSchema);
export default User;
