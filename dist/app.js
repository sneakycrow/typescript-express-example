"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
// Initialize a class App for the express application
class App {
    // Initialize app, middlewares, and controllers
    constructor(controllers, port) {
        this.app = express_1.default();
        this.port = Number(process.env.PORT);
        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    // Public listen fn for "listening"
    listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`App listening http://localhost:${this.port}`);
        });
    }
    // private middleware intializer
    initializeMiddlewares() {
        this.app.use(body_parser_1.default.json());
        this.app.use(morgan_1.default("dev"));
    }
    // private controllers intializer
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }
    // private fn for connecting to db
    connectToTheDatabase() {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose_1.default.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map