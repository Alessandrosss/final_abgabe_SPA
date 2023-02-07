import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./view/user.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MongoDB_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "end_pruefung",
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Connected on Port ${process.env.PORT}`)
    )
  )
  .catch(console.error());
