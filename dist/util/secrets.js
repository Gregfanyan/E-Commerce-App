"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.DOMAIN_ID = exports.CLIENT_ID = exports.RESET_PASSWORD_KEY = exports.MAILGUN_API_KEY = exports.CLIENT_URL = exports.JWT_SECRET = exports.SESSION_SECRET = exports.ENVIRONMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./logger"));
if (fs_1.default.existsSync('.env')) {
    logger_1.default.debug('Using .env file to supply config environment variables');
    dotenv_1.default.config({ path: '.env' });
}
else {
    logger_1.default.debug('Using .env.example file to supply config environment variables');
    dotenv_1.default.config({ path: '.env.example' }); // you can delete this after you create your own .env file!
}
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
exports.SESSION_SECRET = process.env['SESSION_SECRET'];
exports.JWT_SECRET = process.env['SESSION_SECRET'];
exports.CLIENT_URL = process.env['CLIENT_URL'];
exports.MAILGUN_API_KEY = process.env['MAILGUN_API_KEY'];
exports.RESET_PASSWORD_KEY = process.env['RESET_PASSWORD_KEY'];
exports.CLIENT_ID = process.env['CLIENT_ID'];
exports.DOMAIN_ID = process.env['DOMAIN_ID'];
exports.MONGODB_URI = (prod
    ? process.env['MONGODB_URI']
    : process.env['MONGODB_URI_LOCAL']);
if (!exports.SESSION_SECRET || !exports.JWT_SECRET) {
    logger_1.default.error('No client secret. Set SESSION_SECRET or JWT_SECRET environment variable.');
    process.exit(1);
}
if (!exports.MONGODB_URI) {
    if (prod) {
        logger_1.default.error('No mongo connection string. Set MONGODB_URI environment variable.');
    }
    else {
        logger_1.default.error('No mongo connection string. Set MONGODB_URI_LOCAL environment variable.');
    }
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map