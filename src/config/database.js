import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI=process.env.MONGO_URI;

const connect=async()=>{
    try {
    mongoose.connect(`${MONGO_URI}`);
        console.log("db is connected");
    } catch (error) {
        console.log(err);
    }
}
export default connect;
