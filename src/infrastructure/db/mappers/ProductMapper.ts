import { Product } from "../../../core/entities/Product/Product";
import { ProductEntity } from "../entities/Product";
interface DbMapper<D, E> {
     toDomain(entity: E): D;
    toEntity(domain: D): E;
}

export class ProductMapper implements DbMapper<Product, ProductEntity> {
    toDomain(entity: ProductEntity): Product {
        throw new Error("Method not implemented.");
    }
    toEntity(domain: Product): ProductEntity {
        throw new Error("Method not implemented.");
    }

    // public static toDomain(entity: ProductEntity): Product {
    //     throw new Error("Method not implemented.");
    // }
    // public static toEntity(domain: Product): ProductEntity {
    //     throw new Error("Method not implemented.");
    // }
}
