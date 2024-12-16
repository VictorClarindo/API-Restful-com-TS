require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";

const app = express();
const port = config.get("port");
app.use(express.json());
app.use("/api/", router); 

app.listen(port, async() => {
    await db();
    Logger.info(`Escutando na porta ${port}`);
})
