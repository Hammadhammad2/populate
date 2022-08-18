import Picture from "../../models/profilePicture.js";
import User from "../../models/user.js";
import path from "path";
import multer from "multer";
import mongoose from "mongoose";

const Storage = multer.diskStorage({
  destination: "./public/uploads/",

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(
      null,
      file.originalname + "_" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: Storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
}).single("TestImage");

const picture = async (req, res) => {
  return new Promise((reject, resolve) => {
    try {
      upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          return reject(res.send("unsupported file Type"));
        } else if (err) {
          return reject(res.send("unsupported file Type"));
        } else {
          const newImage = new Picture({
            image: req.file.filename,
            userId: req.body.userId,
          });
          newImage
            .save()
            .then(async () => {
              console.log(newImage._id);
              const updated = await User.updateOne(
                { _id: req.body.userId },
                {
                  $set: {
                    pictureId: newImage._id,
                  },
                }
              );
              console.log(updated);
              return resolve(res.send("Successfully upload"));
            })
            .catch((error) => {
              return reject(error);
            });
        }
      });
    } catch (error) {
      return reject(error);
    }
  });
};
export default picture;
