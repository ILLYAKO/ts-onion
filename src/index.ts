import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from "./infrastructure/routers";

dotenv.config();

const app: Express = express();
app.use(express.json());
const PORT: string | number = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
}).on("error", (err) => {
    console.log("ERROR: " + err);
    console.log("Exiting...");
});
