import { ProductService } from "../../../core/services/ProductService/ProductService";
import { Request, Response, NextFunction } from "express";
import { ProductRepositoryImpl } from "../../db/repository/ProductRepositoryImpl";
import { Product } from "../../../core/entities/Product/Product";

export class HttpProductController {
    // constructor(readonly productService: ProductService) {}

    // // Dependency Injection
    productRepositoryImpl = new ProductRepositoryImpl();

    productService = new ProductService(this.productRepositoryImpl);

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

    // // @path('/products')
    async getAll(req: Request, res: Response) {
        console.log("+++httpProductController1");
        // console.log(await this.productService);
        try {
            console.log("+++httpProductController2");

            // const products: Product[] = await this.productService.getAll();
            await this.productService.getAll();

            console.log("+++httpProductController3");
            res.json("xxxx");
            console.log("+++productService4");
        } catch (e: any) {
            res.status(400).json(
                "The products were not collected... " + e.message
            );
        }
    }
    // getAll(req: Request, res: Response) {
    //     res.send("xxxxx");
    // }
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
