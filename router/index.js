import express from "express";
import picture from "../controllers/profilepic/index.js";
import UserInfo from "../controllers/getUser/index.js";

const router = express.Router();

router.post("/picture", picture);
router.get("/User", UserInfo);

export default router;
