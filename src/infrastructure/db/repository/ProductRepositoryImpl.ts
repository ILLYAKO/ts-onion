import { Product } from "../../../core/entities/Product/Product";
import { ProductRepository } from "../../../core/repositories/ProductRepository/ProductRepository";
import { AddProductDto } from "../../../core/repositories/ProductRepository/dto/addProductDto";
import { UpdateProductDto } from "../../../core/repositories/ProductRepository/dto/updateProductDto";
import { ProductMapper } from "../mappers/ProductMapper";

const orm = {
    products: {
        update: () => {},
        add: (dto: any) => {
            return dto;
        },
        remove: () => {},
        findBy: () => {},
    },
};

const productMapper = new ProductMapper();

export class ProductRepositoryImpl implements ProductRepository {

    products: Array<Product> = [
        { id: 1, name: "Product 1", cost: 100, weight: 55 },
        { id: 2, name: "Product 2", cost: 200, weight: 54 },
        { id: 3, name: "Product 3", cost: 300, weight: 53 },
        { id: 4, name: "Product 4", cost: 400, weight: 52 },
    ];

    add(dto: AddProductDto): Product {
        const entityFromDb = orm.products.add(dto);
        return productMapper.toDomain(entityFromDb);
    }

    getById(id: string): Product {
        throw new Error("Method not implemented.");
    }
    getByName(name: string): Product {
        throw new Error("Method not implemented.");
    }
    getAll(): Product[] {
        return this.products;
    }
    remove(id: string) {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateProductDto): Product {
        throw new Error("Method not implemented.");
    }
}
