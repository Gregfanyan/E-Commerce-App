"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../models/Movie"));
function create(movie) {
    return movie.save();
}
function findById(movieId) {
    return Movie_1.default.findById(movieId)
        .exec() // .exec() will return a true Promise
        .then((movie) => {
        if (!movie) {
            throw new Error(`Movie ${movieId} not found`);
        }
        return movie;
    });
}
function findAll() {
    return Movie_1.default.find().sort({ name: 1, publishedYear: -1 }).exec(); // Return a Promise
}
function update(movieId, update) {
    return Movie_1.default.findById(movieId)
        .exec()
        .then((movie) => {
        if (!movie) {
            throw new Error(`Movie ${movieId} not found`);
        }
        if (update.name) {
            movie.name = update.name;
        }
        if (update.publishedYear) {
            movie.publishedYear = update.publishedYear;
        }
        if (update.duration) {
            movie.duration = update.duration;
        }
        return movie.save();
    });
}
function deleteMovie(movieId) {
    return Movie_1.default.findByIdAndDelete(movieId).exec();
}
exports.default = {
    create,
    findById,
    findAll,
    update,
    deleteMovie,
};
//# sourceMappingURL=movie.js.map