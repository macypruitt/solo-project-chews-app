"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var SALT_WORK_FACTOR = 10;
exports.encryptPassword = function (password) {
    var salt = bcrypt_1.default.genSaltSync(SALT_WORK_FACTOR);
    return bcrypt_1.default.hashSync(password, salt);
};
exports.comparePassword = function (candidatePassword, storedPassword) {
    return bcrypt_1.default.compareSync(candidatePassword, storedPassword);
};
