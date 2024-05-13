import mongoose from "mongoose";

const connectMongodb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      UseUnifiedTopography: true,
    });
    console.log("Connected To MongoDb Successfully");
  } catch (error) {
    console.log("cannot connect to mongodb");
  }
};

export default connectMongodb;
