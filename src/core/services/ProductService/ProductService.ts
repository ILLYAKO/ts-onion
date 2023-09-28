import { ProductRepository } from "../../repositories/ProductRepository/ProductRepository";
import { AddProductDto } from "../../repositories/ProductRepository/dto/addProductDto";

export class ProductService {
    constructor(readonly productRepository: ProductRepository) {}

    async getAll() {
        // business logic
        return this.productRepository.getAll();
    }

    async getById(id: string) {
        // business logic
        return this.productRepository.getById(id);
    }

    async createNewProduct(dto: AddProductDto) {
        // business logic
        const newProduct = this.productRepository.create(dto);
    }
}
