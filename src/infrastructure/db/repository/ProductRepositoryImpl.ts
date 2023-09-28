// Data Access Layer (DAL)
// import { Product } from "../../../core/entities/Product/Product";
import { ProductRepository } from "../../../core/repositories/ProductRepository/ProductRepository";
// import { AddProductDto } from "../../../core/repositories/ProductRepository/dto/addProductDto";
// import { UpdateProductDto } from "../../../core/repositories/ProductRepository/dto/updateProductDto";
// import { ProductMapper } from "../mappers/ProductMapper";

// const orm = {
//     products: {
//         update: () => {},
//         add: (dto: any) => {
//             return dto;
//         },
//         remove: () => {},
//         findBy: () => {},
//         findAll: () => {}
//     },
// };

// const productMapper = new ProductMapper();

// export class ProductRepositoryImpl implements ProductRepository {

//     // products: Array<Product> = [
//     //     { id: 1, name: "Product 1", cost: 100, weight: 55 },
//     //     { id: 2, name: "Product 2", cost: 200, weight: 54 },
//     //     { id: 3, name: "Product 3", cost: 300, weight: 53 },
//     //     { id: 4, name: "Product 4", cost: 400, weight: 52 },
//     // ];

//     add(dto: AddProductDto): Product {
//         const entityFromDb = orm.products.add(dto);
//         return productMapper.toDomain(entityFromDb);
//     }

//     getById(id: string): Product {
//         throw new Error("Method not implemented.");
//     }
//     getByName(name: string): Product {
//         throw new Error("Method not implemented.");
//     }
//     getAll(): Product[] {
//         return this.products;
//     }
//     remove(id: string) {
//         throw new Error("Method not implemented.");
//     }
//     update(dto: UpdateProductDto): Product {
//         throw new Error("Method not implemented.");
//     }
// }
// # db/dal/ingredient.ts

import { Op } from "sequelize";
import Ingredient from "../models/ProductModel";
import { GetAllIngredientsFilters } from "./types";
import { IProductInput, IProductOutput } from "../models/ProductModel";
import { Product } from "../../../core/entities/Product/Product";
import { AddProductDto } from "../../../core/repositories/ProductRepository/dto/addProductDto";
import { UpdateProductDto } from "../../../core/repositories/ProductRepository/dto/updateProductDto";
import ProductModel from "../models/ProductModel";


export class ProductRepositoryImpl implements ProductRepository {
    create(dto: AddProductDto): Product {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Product {
        throw new Error("Method not implemented.");
    }
    getByName(name: string): Product {
        throw new Error("Method not implemented.");
    }
    getAll(): any {
        // return ProductModel.findAll()
        const getAll = async (): Promise<any> => {
            return Ingredient.findAll();
        };
    }
    remove(id: string) {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateProductDto): Product {
        throw new Error("Method not implemented.");
    }
}

// export const create = async (
//     payload: IngredientInput
// ): Promise<IngredientOutput> => {
//     const ingredient = await Ingredient.create(payload);
//     return ingredient;
// };

// export const update = async (
//     id: number,
//     payload: Partial<IngredientInput>
// ): Promise<IngredientOutput> => {
//     const ingredient = await Ingredient.findByPk(id);
//     if (!ingredient) {
//         // @todo throw custom error
//         throw new Error("not found");
//     }
//     const updatedIngredient = await (ingredient as Ingredient).update(payload);
//     return updatedIngredient;
// };

// export const getById = async (id: number): Promise<IngredientOutput> => {
//     const ingredient = await Ingredient.findByPk(id);
//     if (!ingredient) {
//         // @todo throw custom error
//         throw new Error("not found");
//     }
//     return ingredient;
// };

// export const deleteById = async (id: number): Promise<boolean> => {
//     const deletedIngredientCount = await Ingredient.destroy({
//         where: { id },
//     });
//     return !!deletedIngredientCount;
// };

// export const getAll = async (
//     filters?: GetAllIngredientsFilters
// ): Promise<IngredientOutput[]> => {
//     return Ingredient.findAll({
//         where: {
//             ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
//         },
//         ...((filters?.isDeleted || filters?.includeDeleted) && {
//             paranoid: true,
//         }),
//     });
// };

//findAllExist
