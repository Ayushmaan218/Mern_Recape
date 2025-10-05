import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouts from "./routes/product.routes.js"

const app = express();
dotenv.config();
const port = process.env.PORT || 5000

app.use("/api/products", productRouts);

//console.log(process.env.MONGO_URI)

app.listen(port, ()=>{
    connectDB();;
    console.log("the server started at http://localhost:"+port)
})

