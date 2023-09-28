import { AddProductDto } from "./dto/addProductDto";
import { UpdateProductDto } from "./dto/updateProductDto";
import { Product } from "../../entities/Product/Product";

export interface ProductRepository {
    create(dto: AddProductDto): Product;
    getById(id: string): Product;
    getByName(name: string): Product;
    getAll(): Array<Product>;
    remove(id: string): any;
    update(dto: UpdateProductDto): Product;
}
