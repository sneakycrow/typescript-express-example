import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import Controller from "./interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";

// Initialize a class App for the express application
class App {
    public app: express.Application;
    public port: number;

    // Initialize app, middlewares, and controllers
    constructor(controllers: Controller[], port: any) {
        this.app = express();
        this.port = Number(process.env.PORT);

        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    // Public listen fn for "listening"
     public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`App listening http://localhost:${this.port}`);
        });
     }

    // private middleware intializer
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
    }

    // private controllers intializer
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller: any) => {
            this.app.use("/", controller.router);
        });
    }

    // private error handling initializer
    private initializeErrorHandling() {
        // This is initialize the same as a middleware, but isn't a middleware in and of itself, so I
        // put it in a different func for seperation of concerns
        this.app.use(errorMiddleware);
    }

    // private fn for connecting to db
    private connectToTheDatabase() {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose.connect(
            `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`,
            {
                useNewUrlParser: true
            }
        ).then(
            // tslint:disable-next-line:no-console
            () => console.log("Connected to Database"),
            // tslint:disable-next-line:no-console
            (err) => console.log(err)
        );
    }
}

export default App;
