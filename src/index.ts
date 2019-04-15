import * as mongoose from "mongoose";
import App from "./app";
import PostsController from "./posts/posts.controller";

const app = new App(
    [
        new PostsController()
    ],
    process.env.PORT
);

app.listen();
