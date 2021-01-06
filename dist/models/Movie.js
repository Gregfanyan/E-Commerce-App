"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        index: true,
    },
    publishedYear: {
        type: Number,
        required: true,
        min: 1900,
    },
    genres: [String],
    duration: {
        type: Number,
        required: true,
        min: 1,
    },
    rating: {
        type: Number,
        min: 0,
    },
    characters: [String],
});
exports.default = mongoose_1.default.model('Movie', movieSchema);
//# sourceMappingURL=Movie.js.map