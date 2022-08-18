import Profile from "../models/profile.js";
import User from "../models/user.js";
import mongoose from "mongoose";
const profileResolver = async (_, { newUser }) => {
  const id = mongoose.Types.ObjectId(newUser.userId);
  try {
    const result = await Profile.create({
      userId: id,
      ...newUser,
    });
    console.log("profile created", result);
    console.log(result._id);
    const update = await User.updateOne(
      { _id: id },
      {
        $set: {
          profileId: result._id,
        },
      }
    );
    console.log(update);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default profileResolver;
