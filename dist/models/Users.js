"use strict";
/* import mongoose, { Document, Schema } from 'mongoose'
import {ProductDocument} from './Products'
export type UserDocument = Document & {
  firstName: string
  lastName: string
  password: string
  email: string
  isAdmin: boolean
  cart: ProductDocument[]
  resetLink: string
} */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
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
            type: mongoose_1.Schema.Types.ObjectId,
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