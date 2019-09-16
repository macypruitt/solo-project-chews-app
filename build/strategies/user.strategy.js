"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var pool_1 = __importDefault(require("../modules/pool"));
var encryption_1 = require("../modules/encryption");
var passport_local_1 = require("passport-local");
passport_1.default.serializeUser(function (user, done) {
    done(null, user.id);
});
passport_1.default.deserializeUser(function (id, done) {
    pool_1.default.query('SELECT * FROM "user" WHERE id = $1', [id]).then(function (result) {
        var user = result && result.rows && result.rows[0];
        if (user) {
            delete user.password;
            done(null, user);
        }
        else {
            done(null, null);
        }
    }).catch(function (error) {
        console.log("Error with query during deserializing user " + error);
        done(error, null);
    });
});
passport_1.default.use('local', new passport_local_1.Strategy(function (username, password, done) {
    pool_1.default.query('SELECT * FROM "user" WHERE username = $1', [username])
        .then(function (result) {
        var user = result && result.rows && result.rows[0];
        if (user && encryption_1.comparePassword(password, user.password)) {
            done(null, user);
        }
        else {
            done(null, null);
        }
    }).catch(function (error) {
        console.log("Error with query for user " + error);
        done(error, null);
    });
}));
exports.default = passport_1.default;
