import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from "./infrastructure/routers";

const app: Express = express();
import dbInit from "./infrastructure/db/init";
dbInit()

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use("/api", router);

dotenv.config();
const PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
}).on("error", (err) => {
    console.log("ERROR: " + err);
    console.log("Exiting...");
});
