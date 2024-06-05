import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("The MONGODB_URI environment variable is not set.");
}

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use("/api/user", userRoute);

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
