import mongoose from "mongoose";

let iscConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI)
    return console.log("MONGODB_URI is not defined");

  if (iscConnected) return console.log("=> using existing database connection");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    iscConnected = true;
  } catch (error) {
    console.log(error);
  }
};
