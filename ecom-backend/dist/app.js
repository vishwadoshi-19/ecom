import express from "express";
//Importing Routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});
//Using routes
app.use("/api/v1/user", userRoute);
//end middleware
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
