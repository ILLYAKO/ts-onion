import ProductModel from "./models/ProductModel";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
    ProductModel.sync({ alter: isDev })
        .then(() => {
            console.log("Product table created successfully!");
        })
        .catch((error) => {
            console.error("Unable to create table : ", error);
        });
};
export default dbInit;
