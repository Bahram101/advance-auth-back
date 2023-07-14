import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();

// app.use(express.json());

const start = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://bahram:bahram123456@cluster0.enobhfc.mongodb.net/"
      )
      .then(() => console.log("DB is OK"));
    app.listen(PORT, () => {
      console.log(`Server is started successfully on port ${PORT}`);
    });
  } catch (e) {
    console.log("Error", e);
  }
};

start();
