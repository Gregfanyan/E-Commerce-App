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
exports.addProductToCart = exports.resetPassword = exports.forgotPassword = exports.getCart = exports.findAll = exports.findById = exports.deleteUser = exports.updateUser = exports.logInUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailgun_js_1 = __importDefault(require("mailgun-js"));
const lodash_1 = __importDefault(require("lodash"));
const models_1 = require("../models");
const Users_1 = __importDefault(require("../services/Users"));
const secrets_1 = require("../util/secrets");
const DOMAIN = 'sandbox9026ac1bb7774ff18f78cd4cd58c8300.mailgun.org';
const mg = mailgun_js_1.default({ apiKey: secrets_1.MAILGUN_API_KEY, domain: DOMAIN });
const apiError_1 = require("../helpers/apiError");
// POST /users
exports.createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, password, email, cart } = req.body;
        const emailExists = yield Users_1.default.findUserByEmail(email);
        const hashedPassword = bcrypt_1.default.hashSync(password, 8);
        if (emailExists) {
            next(new apiError_1.BadRequestError('Email already exists'));
        }
        else {
            const user = new models_1.Users({
                firstName,
                lastName,
                password: hashedPassword,
                email,
                cart,
            });
            if (user.email === 'grigor.fanyan@integrify.io') {
                user.isAdmin = true;
            }
            yield Users_1.default.create(user);
            res.json(user);
        }
    }
    catch (error) {
        if (!bcrypt_1.default.compareSync(req.body.password, req.body.email)) {
            return res.status(400).send({ message: 'The password is invalid' });
        }
        else {
            next(new apiError_1.InternalServerError('Internal Server Error', error));
        }
    }
});
exports.logInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (email) {
            yield models_1.Users.findOne({ email }).then((user) => __awaiter(void 0, void 0, void 0, function* () {
                if (!user)
                    res.status(404).json({ message: 'user not found' });
                else {
                    const logInSuccess = yield bcrypt_1.default.compare(password, user.password);
                    logInSuccess
                        ? user
                        : res.status(404).json({ message: 'Incorrect password' });
                    const token = jsonwebtoken_1.default.sign({ id: user._id }, secrets_1.JWT_SECRET, { expiresIn: '30d' }, (err, token) => __awaiter(void 0, void 0, void 0, function* () {
                        if (err)
                            throw err;
                        if (user) {
                            yield user.populate('cart').execPopulate();
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    email: user.email,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    isAdmin: user.isAdmin,
                                    cart: user.cart,
                                    resetLink: user.resetLink,
                                },
                            });
                        }
                    }));
                }
            }));
        }
    }
    catch (error) {
        return res.status(404).json({ message: 'user not found' });
    }
});
// PUT /users/:userId
exports.updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = req.body;
        const userId = req.params.userId;
        const updatedUser = yield Users_1.default.update(userId, update);
        res.json(updatedUser);
    }
    catch (error) {
        next(new apiError_1.NotFoundError('UserById did not update', error));
    }
});
// DELETE /users/:userId
exports.deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Users_1.default.deleteUser(req.params.userId);
        res.status(204).end();
    }
    catch (error) {
        next(new apiError_1.NotFoundError('did not delete user', error));
    }
});
// GET /Users/:users
exports.findById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield Users_1.default.findById(req.params.userId));
    }
    catch (error) {
        next(new apiError_1.NotFoundError('User by Id did not found', error));
    }
});
// GET /users
exports.findAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield Users_1.default.findAll());
    }
    catch (error) {
        next(new apiError_1.NotFoundError('User not found', error));
    }
});
//GET /users/:userId/cart
exports.getCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (yield Users_1.default.findById(req.params.userId))
            .populate('cart')
            .execPopulate();
        res.status(200).json(user);
    }
    catch (error) {
        next(new apiError_1.NotFoundError('User not found', error));
    }
});
exports.forgotPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        models_1.Users.findOne({ email }, (err, user) => {
            if (err || !user) {
                return res.status(404).json({ msg: 'user not found' });
            }
            else {
                const token = jsonwebtoken_1.default.sign({ email }, secrets_1.RESET_PASSWORD_KEY, {
                    expiresIn: '20m',
                });
                const data = {
                    from: 'Greg@mail.com',
                    to: email,
                    subject: 'Password Reset Link',
                    html: `
                <p>${secrets_1.CLIENT_URL}/reset/${token}</p>`,
                };
                return user.updateOne({ resetLink: token }, (err) => {
                    if (err) {
                        return res.status(404).json({ msg: 'user not found' });
                    }
                    else {
                        mg.messages().send(data, (err, body) => {
                            if (err) {
                                return res.json({
                                    err: err.message,
                                });
                            }
                            return res.json({
                                msg: `Email has been sent to ${email}. Please follow the instructions to reset your password.`,
                            });
                        });
                    }
                });
            }
        });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            next(new apiError_1.BadRequestError('Problem validating user'));
        }
        else {
            next(new apiError_1.InternalServerError('Something went wrong. Please refresh the page'));
        }
    }
});
exports.resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resetLink, newPass } = req.body;
        if (resetLink) {
            jsonwebtoken_1.default.verify(resetLink, secrets_1.RESET_PASSWORD_KEY, (decodedData) => {
                if (decodedData) {
                    return res.status(401).json({
                        messages: 'Incorrect or expired token',
                    });
                }
                models_1.Users.findOne({ resetLink }, (err, user) => {
                    if (err || !user) {
                        return res.status(404).json({
                            msg: 'User with this token does not exist',
                        });
                    }
                    const obj = {
                        password: newPass,
                        resetLink: '',
                    };
                    bcrypt_1.default.genSalt(10, (err, salt) => {
                        bcrypt_1.default.hash(obj.password, salt, (err, hash) => {
                            if (err)
                                throw err;
                            obj.password = hash;
                            user = lodash_1.default.extend(user, obj);
                            user.save((err) => {
                                if (err) {
                                    return res.status(400).json({
                                        msg: 'reset password error',
                                    });
                                }
                                else {
                                    return res.status(200).json({
                                        msg: 'Your password has been changed',
                                    });
                                }
                            });
                        });
                    });
                });
            });
        }
        else {
            return res.status(401).json({ msg: 'Authentication Error' });
        }
    }
    catch (err) {
        next(new apiError_1.NotFoundError('Not found', err));
    }
});
//Patch/incCart/:userid/
exports.addProductToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.body.id;
        const userId = req.params.userId;
        const updatedUser = yield Users_1.default.addProductToCart(userId, productId);
        res.json(updatedUser);
    }
    catch (error) {
        console.log(error);
        next(new apiError_1.BadRequestError('Something went wrong', error));
    }
});
//# sourceMappingURL=Users.js.map