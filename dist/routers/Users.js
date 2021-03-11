"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users_1 = require("../controllers/Users");
const VerifyToken_1 = require("../controllers/VerifyToken");
const router = express_1.default.Router();
// Every path we define here will get /api/v1/products prefix
router.get('/', Users_1.findAll);
router.patch('/inCart/:userId', Users_1.addProductToCart);
router.get('/:userId', VerifyToken_1.VerifyToken, Users_1.findById);
router.put('/forgotPassword', Users_1.forgotPassword);
router.put('/resetPassword', Users_1.resetPassword);
router.delete('/:userId', VerifyToken_1.VerifyToken, Users_1.deleteUser);
router.post('/', Users_1.createUser);
router.post('/logIn', Users_1.logInUser);
router.get('/:userId/cart', VerifyToken_1.VerifyToken, Users_1.getCart);
router.put('/:userId/checkout', VerifyToken_1.VerifyToken, Users_1.updateUser);
router.post('/googleLogin', Users_1.googleLogin);
exports.default = router;
//# sourceMappingURL=Users.js.map