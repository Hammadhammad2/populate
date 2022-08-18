import User from "../models/user.js";
import Profile from "../models/profile.js";
import Picture from "../models/profilePicture.js";
import mongoose from "mongoose";

const getUserResolver = async (_, { userID }) => {
  console.log(mongoose.Types.ObjectId(userID));

  try {
    const user = await User.findOne({
      _id: mongoose.Types.ObjectId(userID),
    }).populate("profileId pictureId");
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default getUserResolver;
