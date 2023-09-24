import { Router } from "express";
import { ProductController } from "../controllers/Product/productController";
import { HttpProductController } from "../controllers/Product/HttpProductController";
import { ProductService } from "../../core/services/ProductService/ProductService";
import { ProductRepositoryImpl } from "../db/repository/ProductRepositoryImpl";
// const authMiddleware = require("../middlewares/authMiddleware");
export const productRouter = Router();

const httpProductController = new HttpProductController();

/* /product  */
// productRouter.post("/", authMiddleware, ProductController.create);
productRouter.get("/", httpProductController.getAll);
// productRouter.get("/", (req, res) => { res.send("product router");});
// productRouter.post("/", httpProductController.createNewProduct);
// productRouter.get("/:id", ProductController.findOne);
