import express from "express";
import { deleteUser, getAllUsers, getUser, newUser, } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express.Router();
//route - /api/v1/user/new
app.post("/new", singleUpload, newUser);
//route - /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);
//route - /api/v1/user/:id
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
export default app;
