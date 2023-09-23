import { ProductRepository } from "../../repositories/ProductRepository/ProductRepository";
import { AddProductDto } from "../../repositories/ProductRepository/dto/addProductDto";

export class ProductService {
    constructor(readonly productRepository: ProductRepository) {}

    async getAll() {
        // business logic
        console.log("ProductService1");
        // return this.productRepository.getAll();
        return "Hello from ProductService";
    }

    async getById(id: string) {
        // business logic
        return this.productRepository.getById(id);
    }

    async createNewProduct(dto: AddProductDto) {
        // business logic
        const newProduct = this.productRepository.add(dto);
    }
}

// // Example
// const productService = new ProductService(new SQLRepo);
// const productService = new ProductService(new MongoRepo);
// C:\_projects\js-onion\src\core\services\ProductService\ProductService.ts
// DI Container
