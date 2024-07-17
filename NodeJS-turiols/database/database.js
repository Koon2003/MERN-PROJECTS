import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
import Exception from "../exceptions/Exception.js";
mongoose.set("strictQuery", true);

async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    //console.log("connect mongoDB successfully");
    print("Connect mongoDB successfully", OutputType.SUCCESS);
    return connection;
  } catch (error) {
    const { code } = error;
    if (code == 8000) {
      throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD);
    } else if (code == "ENOTFOUND") {
      throw new Exception(Exception.WRONG_CONNECTIN_STRING);
    }
    debugger;
    throw new Exception(Exception.CANNOT_CONNECT_MONGODB);
  }
}

export default dbConnect;
