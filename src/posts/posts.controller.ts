import * as express from "express";
import Post from "./post.interface";

class PostsController {
    public path = "/posts";
    public router = express.Router();

    // Our array of posts
    // NOTE: This is temporary data
    // TODO: Connect to DB and get posts from there
    private posts: Post[] = [
        {
            author: "Zachary",
            content: "Dolor sit amet",
            title: "Lorem Ipsum"
        }
    ];

    // Initializer (constructor). This is where we initialize routes for example
    constructor() {
        this.initializeRoutes();
    }

    // This sets the routes for our controller
    public initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }

    // Func for grabbing all posts and returning them
    private getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.posts);
    }

    // Func for creating a post from the request body
    private createAPost = (request: express.Request, response: express.Response) => {
        const post: Post = request.body;
        this.posts.push(post);
        response.send(post);
    }
}

export default PostsController;
