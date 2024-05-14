import mongoose from "mongoose";

const connectMongodb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To MongoDB Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongodb;
