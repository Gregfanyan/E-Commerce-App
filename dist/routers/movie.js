"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_1 = require("../controllers/movie");
const router = express_1.default.Router();
// Every path we define here will get /api/v1/movies prefix
router.get('/', movie_1.findAll);
router.get('/:movieId', movie_1.findById);
router.put('/:movieId', movie_1.updateMovie);
router.delete('/:movieId', movie_1.deleteMovie);
router.post('/', movie_1.createMovie);
exports.default = router;
//# sourceMappingURL=movie.js.map