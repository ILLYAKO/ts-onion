import { Request, Response, NextFunction } from "express";

// const productService = require("../service/productService");

export class ProductController {
    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            // const products = await productService.findAll();
            const products = ["Hello", "world"];

            if (!products) {
                res.status(500).send({
                    message: "Some error occurred while retrieving products.",
                });
            }
            res.json(products);
        } catch (e) {
            next(e);
        }
    }
}

