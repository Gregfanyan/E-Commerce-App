"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.findById = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const Products_1 = __importDefault(require("../models/Products"));
const Products_2 = __importDefault(require("../services/Products"));
const apiError_1 = require("../helpers/apiError");
// POST /products
exports.createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, categories, variants, sizes, img, price, } = req.body;
        const product = new Products_1.default({
            name,
            description,
            categories,
            variants,
            sizes,
            img,
            price,
        });
        yield Products_2.default.create(product);
        res.json(product);
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            next(new apiError_1.BadRequestError('Invalid Request', error));
        }
        else {
            next(new apiError_1.InternalServerError('Internal Server Error', error));
        }
    }
});
// PUT /products/:productId
exports.updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = req.body;
        const productId = req.params.productId;
        const updatedProduct = yield Products_2.default.update(productId, update);
        res.json(updatedProduct);
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Product not found', error));
    }
});
// DELETE /products/:productId
exports.deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Products_2.default.deleteProduct(req.params.productId);
        res.status(204).end();
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Product not found', error));
    }
});
// GET /products/:products
exports.findById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield Products_2.default.findById(req.params.productId));
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Product not found', error));
    }
});
// GET /products
exports.findAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield Products_2.default.findAll());
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Product not found', error));
    }
});
//# sourceMappingURL=Products.js.map