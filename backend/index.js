import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import ProductRouter from "./routes/products.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Users from './models/UserModel.js'
// import Products from './models/ProductModels.js'
dotenv.config();
const app = express();
const port = 5000;

try {
  await db.authenticate();
  console.log("database connected");
  // await Users.sync()
  // await Products.sync()
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use("/products", ProductRouter);

app.listen(port, () => console.log(`server running at port ${port}`));
