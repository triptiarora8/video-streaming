
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});
import connectDB from "./db/index.js";

connectDB();

// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`,)
//     }
//     catch(err){
//         console.log("Error",err)
//         throw err
//     }

// })()