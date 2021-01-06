"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
        max: 64,
    },
    lastName: {
        type: String,
        required: true,
        max: 64,
    },
    password: {
        type: String,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cart: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Products',
        },
    ],
    resetLink: {
        data: String,
        default: '',
    },
});
exports.default = mongoose_1.default.model('Users', userSchema);
//# sourceMappingURL=Users.js.map