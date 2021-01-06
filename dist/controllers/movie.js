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
exports.findAll = exports.findById = exports.deleteMovie = exports.updateMovie = exports.createMovie = void 0;
const Movie_1 = __importDefault(require("../models/Movie"));
const movie_1 = __importDefault(require("../services/movie"));
const apiError_1 = require("../helpers/apiError");
// POST /movies
exports.createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, publishedYear, genres, duration, characters } = req.body;
        const movie = new Movie_1.default({
            name,
            publishedYear,
            genres,
            duration,
            characters,
        });
        yield movie_1.default.create(movie);
        res.json(movie);
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
// PUT /movies/:movieId
exports.updateMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = req.body;
        const movieId = req.params.movieId;
        const updatedMovie = yield movie_1.default.update(movieId, update);
        res.json(updatedMovie);
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Movie not found', error));
    }
});
// DELETE /movies/:movieId
exports.deleteMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movie_1.default.deleteMovie(req.params.movieId);
        res.status(204).end();
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Movie not found', error));
    }
});
// GET /movies/:movieId
exports.findById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield movie_1.default.findById(req.params.movieId));
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Movie not found', error));
    }
});
// GET /movies
exports.findAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.json(yield movie_1.default.findAll());
    }
    catch (error) {
        next(new apiError_1.NotFoundError('Movies not found', error));
    }
});
//# sourceMappingURL=movie.js.map