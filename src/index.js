
// import dotenv from "dotenv";
// dotenv.config({
//     path: "./.env",
// });
// import connectDB from "./db/index.js";

// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT,()=>{
//         console.log(`Server is running on port ${process.env.PORT}`)
//     })
// })
// .catch(err=>{
//     console.log("Mongo DB connection failed",err)
//     throw err;
// })

// // ;(async ()=>{
// //     try{
// //         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`,)
// //     }
// //     catch(err){
// //         console.log("Error",err)
// //         throw err
// //     }

// // })()

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {
    console.log("Mongo DB connection failed", err);
    throw err;
})