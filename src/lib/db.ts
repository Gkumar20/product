import mongoose from "mongoose";

const { mongouser, mongopass } = process.env;
const MONGO_URI = `mongodb+srv://${mongouser}:${mongopass}@nextjscluster.p6xdq.mongodb.net/productDB`;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {serverSelectionTimeoutMS: 10000});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default connectDB;
