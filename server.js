import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
// db and authentiocate User
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import ticketRouter from "./routes/ticketRoutes.js";
//Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/ticket", ticketRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`App is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
