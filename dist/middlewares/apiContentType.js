"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiError_1 = require("../helpers/apiError");
function default_1(req, res, next) {
    if ((req.method === 'POST' || req.method === 'PUT') &&
        !req.is('application/json')) {
        next(new apiError_1.BadRequestError());
    }
    else {
        next();
    }
}
exports.default = default_1;
//# sourceMappingURL=apiContentType.js.map