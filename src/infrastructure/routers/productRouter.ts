import { Router } from "express";
import { ProductController } from "../controllers/Product/productController";
import { HttpProductController } from "../controllers/Product/HttpProductController"
import { ProductService } from "../../core/services/ProductService/ProductService";
import { ProductRepositoryImpl } from "../db/repository/ProductRepositoryImpl";
// const authMiddleware = require("../middlewares/authMiddleware");
export const productRouter = Router();

// // Dependency Injection
// const productRepositoryImpl = new ProductRepositoryImpl
// const productService = new ProductService(productRepositoryImpl);
// const httpProductController = new HttpProductController(productService);
const httpProductController = new HttpProductController();


//
// const sqlUserRepository = new SQLUserRepository()
// const userSErvice = new UserService(sqlUserRepository);
// 


/* /product  */
// productRouter.post("/", authMiddleware, ProductController.create);
productRouter.get("/", httpProductController.getAll);
// productRouter.get("/", (req, res) => { res.send("product router");});
// productRouter.post("/", httpProductController.createNewProduct);
// productRouter.get("/:id", ProductController.findOne);

// module.exports = productRouter;
