import mongoose from "mongoose";

const pictureSchema = mongoose.Schema({
  id: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: {
    type: String,
  },
});

const Picture = new mongoose.model("Picture", pictureSchema);
export default Picture;
