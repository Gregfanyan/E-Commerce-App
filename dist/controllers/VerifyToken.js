"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../util/secrets");
exports.VerifyToken = (req, res, next) => {
    const token = req.header('auth_token');
    if (!token)
        return res.status(401).send('access Denied');
    try {
        const verified = jsonwebtoken_1.default.verify(token, secrets_1.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(400).send('invalid error');
    }
};
//# sourceMappingURL=VerifyToken.js.map