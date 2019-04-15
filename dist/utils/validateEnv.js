"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validateEnv = () => {
    envalid_1.cleanEnv(process.env, {
        MONGO_PASSWORD: envalid_1.str(),
        MONGO_PATH: envalid_1.str(),
        MONGO_USER: envalid_1.str(),
        PORT: envalid_1.port()
    });
};
//# sourceMappingURL=validateEnv.js.map