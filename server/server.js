import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import importData from "./dataImport.js";
import productRoute from "./routes/ProductRoutes.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import userRouter from "./routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API 
app.use("/api/import", importData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);


//ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

//app to listen on port 5000 and print server running if connection is successful
app.listen(PORT, console.log(`server run in port ${PORT}`));
