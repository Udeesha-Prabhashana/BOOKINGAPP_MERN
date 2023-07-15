import express from "express";
import User from "../models/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

import {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, you are logged in and you can delete all accounts")
// });

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers); //only admin can get all users


export default router
