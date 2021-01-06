"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Products_1 = require("../controllers/Products");
const VerifyToken_1 = require("../controllers/VerifyToken");
const router = express_1.default.Router();
// Every path we define here will get /api/v1/products prefix
router.get('/', Products_1.findAll);
router.get('/:productId', Products_1.findById);
router.put('/:productId', VerifyToken_1.VerifyToken, Products_1.updateProduct);
router.delete('/:productId', VerifyToken_1.VerifyToken, Products_1.deleteProduct);
router.post('/', /*  VerifyToken,  */ Products_1.createProduct);
exports.default = router;
//# sourceMappingURL=Products.js.map