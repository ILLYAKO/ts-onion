import { ProductService } from "../../../core/services/ProductService/ProductService";
import { Request, Response, NextFunction } from "express";
import { ProductRepositoryImpl } from "../../db/repository/ProductRepositoryImpl";
import { Product } from "../../../core/entities/Product/Product";
import { ProductRepository } from "../../../core/repositories/ProductRepository/ProductRepository";

// Dependency Injection
const productRepositoryImpl = new ProductRepositoryImpl();
const productService = new ProductService(productRepositoryImpl);

export class HttpProductController {
    // // @path('/products/create')
    // async createNewProduct(req: Request, res: Response) {
    //     try {
    //         const { name, weight, cost } = req.body;
    //         await this.productService.createNewProduct({ name, weight, cost });
    //         res.json("The product was created successfully!");
    //     } catch (e: any) {
    //         res.status(400).json("The product was not created..." + e.message);
    //     }
    // }

    // @path('/products')
    async getAll(req: Request, res: Response) {
        try {
            const products: Product[] = await productService.getAll();
            res.json(products);
        } catch (e: any) {
            res.status(400).json(
                "The products were not collected... " + e.message
            );
        }
    }
}

// class SQLUserRepository implements UserRepository{
//     findAll(): void{}
// }
// class MongoUserRepository implements UserRepository {
//     findAll(): void {}
// }

// const sqlUserRepository = new SQLUserRepository()
// const userSErvice = new UserService(sqlUserRepository);
// //
// const mongoUserRepository = new MongoUserRepository();
// const userSErvice = new UserService(mongoUserRepository);
