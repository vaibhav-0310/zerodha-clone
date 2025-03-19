import express from "express";
import mongoose from "mongoose";
import { HoldingsModel } from "./model/HoldingsModel.js";
import PositionsModel from "./model/PositionsModel.js";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8080 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings",async(req,res)=>{
  let allHoldings=await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
  let allPositions=await PositionsModel.find({});
  res.json(allPositions);
});





//start

const createDB = async() => {
   mongoose.connect(process.env.MONGOURL);
};

app.listen(port, () => {
  console.log(`Server started at Port ${port}`);
  createDB()
    .then(() => {
      console.log("DB connected");
    })
    .catch((e) => {
      console.log(e);
    });
});