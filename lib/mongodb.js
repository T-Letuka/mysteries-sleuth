import mongoose from "mongoose";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected To MongoDb Successfully");
  } catch (error) {
    console.log("cannot connect to mongodb");
  }
};
