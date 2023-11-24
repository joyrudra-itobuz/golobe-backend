import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import StatusCodes from "./enums/statusCodes.enum";
import config from "./config/config";
import connectDb from "./config/databaseConnection";
import commonRouter from "./routes/common.routes";

/* Connect To DB */
connectDb();

const app = express();

export const server = app.listen(config.PORT ?? 8070, () => {
  console.log(`Listening On http://localhost:${config.PORT ?? 8070}`);
});

app.use(cors());
app.use(express.json());
app.use(commonRouter);

app.use("/hello", (req, res, next) => {
  try {
    res.status(StatusCodes.OK).send({ success: true, message: "Hey" });
  } catch (error) {
    console.log(error);
  }
});

app.use((req, res, next) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .send({ success: false, message: "Route Not Found!" });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .send({ message: error.message, success: false });
});
