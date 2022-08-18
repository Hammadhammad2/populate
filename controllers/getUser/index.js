import User from "../../models/user.js";
import Profile from "../../models/profile.js";
import Picture from "../../models/profilePicture.js";
const UserInfo = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: "62fdd032ad8f27b2f70e49c5",
    }).populate("profileId pictureId");
    console.log(user);
    res.send(user);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
export default UserInfo;
