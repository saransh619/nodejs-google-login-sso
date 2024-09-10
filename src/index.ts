import "dotenv/config";
import express, { Request, Response } from "express";
import session from "express-session";
import userRoutes from "./routes/userRoute";

const app = express();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || "default_secret",
  })
);

app.set("view engine", "ejs");

app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
