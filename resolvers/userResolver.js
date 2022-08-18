import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Profile from "../models/profile.js";

const userResolver = async (_, { newUser }) => {
  try {
    const { lastname, email, firstname, password, pictureId, profileId } =
      newUser;

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      throw new Error("User Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    console.log("User created", result);
    return result;
  } catch (err) {
    return err;
  }
};

export default userResolver;
