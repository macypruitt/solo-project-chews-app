"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_session_1 = __importDefault(require("cookie-session"));
var warnings_1 = require("../constants/warnings");
var serverSessionSecret = function () {
    if (!process.env.SERVER_SESSION_SECRET ||
        process.env.SERVER_SESSION_SECRET.length < 8 ||
        process.env.SERVER_SESSION_SECRET === warnings_1.exampleBadSecret) {
        console.log(warnings_1.badSecret);
    }
    return process.env.SERVER_SESSION_SECRET;
};
exports.default = cookie_session_1.default({
    secret: serverSessionSecret() || 'secret',
    keys: ['user'],
    maxAge: 60 * 60 * 1000,
    secure: false,
});
