import * as express from "express";
import Test from "./test.interface";

class TestController {
    public path = "/tests";
    public router = express.Router();

    private tests: Test[] = [
        {
            coolName: "Zachy Boi",
            name: "Zach",
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllTests);
        this.router.post(this.path, this.createATest);
    }

    private getAllTests = (request: express.Request, response: express.Response) => {
        response.send(this.tests);
    }

    private createATest = (request: express.Request, response: express.Response) => {
        const test: Test = request.body;
        this.tests.push(test);
        response.send(test);
    }
}

export default TestController;
