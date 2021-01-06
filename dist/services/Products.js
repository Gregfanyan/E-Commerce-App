"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../models/Products"));
function create(product) {
    return product.save();
}
function findById(productId) {
    return Products_1.default.findById(productId)
        .exec()
        .then((product) => {
        if (!product) {
            throw new Error(`Products ${productId} not found`);
        }
        return product;
    });
}
function findAll() {
    return Products_1.default.find().exec(); // Return a Promise
}
function update(productId, update) {
    return Products_1.default.findById(productId)
        .exec()
        .then((product) => {
        if (!product) {
            throw new Error(`Product ${productId} not found`);
        }
        if (update.name) {
            product.name = update.name;
        }
        if (update.description) {
            product.description = update.description;
        }
        if (update.categories) {
            product.categories = update.categories;
        }
        if (update.variants) {
            product.variants = update.variants;
        }
        if (update.sizes) {
            product.sizes = update.sizes;
        }
        return product.save();
    });
}
function deleteProduct(productId) {
    return Products_1.default.findByIdAndDelete(productId).exec();
}
exports.default = {
    create,
    findById,
    findAll,
    update,
    deleteProduct,
};
//# sourceMappingURL=Products.js.map