import express from "express";
import { router } from "./v1/index.js";
const Morouter=express.Router();

Morouter.use('/v1',router);

export default Morouter;