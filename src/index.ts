import * as mongoose from "mongoose";
import App from "./app";
import TestController from "./controllers/test.controller";

const app = new App(
    [
        new TestController()
    ],
    process.env.PORT
);

app.listen();
