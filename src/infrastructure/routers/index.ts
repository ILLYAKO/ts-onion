import { Router } from "express";
import { productRouter } from "./productRouter";

export const router = Router();
// router.get("/", (req, res) => { res.send("api router");});
router.use("/product", productRouter);
