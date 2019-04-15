import * as mongoose from "mongoose";
import App from "./app";
import TestController from "./controllers/test.controller";
import * as validateEnv from "./utils/validateEnv";

validateEnv();

const app = new App(
    [
        new TestController()
    ],
    process.env.PORT
);

app.listen();
