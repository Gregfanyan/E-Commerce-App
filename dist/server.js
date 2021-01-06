"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const app_1 = __importDefault(require("./app"));
app_1.default.use(errorhandler_1.default());
if (process.env.NODE_ENV === 'production') {
    app_1.default.use(express_1.default.static('client/build'));
}
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
});
exports.default = server;
//# sourceMappingURL=server.js.map