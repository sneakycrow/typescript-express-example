"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_controller_1 = __importDefault(require("./controllers/test.controller"));
const index_1 = __importDefault(require("./index"));
const app = new index_1.default([
    new test_controller_1.default(),
], process.env.PORT);
app.listen();
//# sourceMappingURL=server.js.map