import { model } from "mongoose";
import {HoldingsSchema} from "../schemas/HoldingsSchema.js";

export const HoldingsModel= new model("holding",HoldingsSchema);

