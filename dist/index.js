"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const test_controller_1 = __importDefault(require("./controllers/test.controller"));
const validateEnv = __importStar(require("./utils/validateEnv"));
validateEnv();
const app = new app_1.default([
    new test_controller_1.default()
], process.env.PORT);
app.listen();
//# sourceMappingURL=index.js.map