import mongoose from "mongoose";
import PositionsModel from "../model/PositionsModel.js";
import { positions } from "./data.js"; 

mongoose.connect("mongodb://127.0.0.1/Zerodha");

const init = async () => {
  try {
    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(positions); 
    console.log("Data was initialized successfully");
  } catch (error) {
    console.error("Error initializing data:", error);
  } finally {
    mongoose.connection.close(); 
  }
};

init(); 
