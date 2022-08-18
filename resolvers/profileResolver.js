import Profile from "../models/profile.js";

const profileResolver = async (_, { newUser }) => {
  try {
    const result = await Profile.create({
      ...newUser,
    });
    console.log("User created", result);
    return result;
  } catch (err) {
    return err;
  }
};

export default profileResolver;
