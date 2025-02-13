import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://localhost:27017", {
        dbName: "ecom",
    })
        .then((c) => {
        console.log(`DB Connected to ${c.connection.host}`);
    })
        .catch((err) => {
        console.log(err);
    });
};
