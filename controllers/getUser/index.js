import Profile from "../../models/profile.js";
import User from "../../models/user.js";

const UserInfo = async (req, res) => {
  //   const profile = await Profile.findOne({ _id: "62fcd84d4628d620405b6637" });
  //   console.log(profile);
  try {
    const user = await User.findOne({
      _id: "62fce38f6616864ec8b4fce9",
    }).populate("profileId pictureId");

    console.log(user);
    res.send(user);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
export default UserInfo;
