"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../models/Users"));
function create(user) {
    return user.save();
}
function findById(userId) {
    return Users_1.default.findById(userId)
        .exec()
        .then((user) => {
        if (!user) {
            throw new Error(`Users ${userId} not found`);
        }
        return user;
    });
}
function findAll() {
    return Users_1.default.find().populate('cart').sort({ firstName: 1 }).exec();
}
function update(userId, update) {
    return Users_1.default.findById(userId)
        .exec()
        .then((user) => {
        if (!user) {
            throw new Error(`User ${userId} not found`);
        }
        if (update.firstName) {
            user.firstName = update.firstName;
        }
        if (update.lastName) {
            user.lastName = update.lastName;
        }
        if (update.password) {
            user.password = update.password;
        }
        if (update.email) {
            user.email = update.email;
        }
        if (update.isAdmin) {
            user.isAdmin = update.isAdmin;
        }
        if (update.cart) {
            user.cart = update.cart;
        }
        return user.save();
    });
}
function findUserByEmail(email) {
    return Users_1.default.findOne({ email: email }).exec();
}
function deleteUser(userId) {
    return Users_1.default.findByIdAndDelete(userId).exec();
}
exports.default = {
    create,
    findById,
    findAll,
    update,
    deleteUser,
    findUserByEmail,
};
//# sourceMappingURL=Users.js.map