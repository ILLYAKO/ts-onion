import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config/db.config";

interface IProductAttributes {
    id: number;
    title: string;
    imageId: string;
    productPrice?: number;
    vendor?: string;
    segment?: string;
    description?: string;
    weight?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface IProductInput extends Optional<IProductAttributes, "id" | "title"> {}
export interface IProductOutput extends Required<IProductAttributes> {}

class ProductModel
    extends Model<IProductAttributes, IProductInput>
    implements IProductAttributes
{
    id!: number;
    title!: string;
    imageId!: string;
    productPrice!: number;
    vendor!: string;
    segment!: string;
    description!: string;
    weight!: number;
    //  timestamps!
    createdAt!: Date;
    updatedAt!: Date;
    deletedAt?: Date | undefined;
}

ProductModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        productPrice: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        vendor: {
            type: DataTypes.STRING,
        },
        segment: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        weight: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true,
    }
);
export default ProductModel;
