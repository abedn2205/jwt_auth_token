import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductsById,
  updateProduct,
  deleteProduct
} from "../controller/Products.js";
const router = express.Router();
import { verifyToken } from "../middleware/verifyToken.js";

router.get("/",verifyToken, getAllProducts);
router.get("/:id", getProductsById);
router.post("/", verifyToken, createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
