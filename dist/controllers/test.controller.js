"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class TestController {
    constructor() {
        this.path = "/tests";
        this.router = express.Router();
        this.tests = [
            {
                coolName: "Zachy Boi",
                name: "Zach",
            }
        ];
        this.getAllTests = (request, response) => {
            response.send(this.tests);
        };
        this.createATest = (request, response) => {
            const test = request.body;
            this.tests.push(test);
            response.send(test);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllTests);
        this.router.post(this.path, this.createATest);
    }
}
exports.default = TestController;
//# sourceMappingURL=test.controller.js.map