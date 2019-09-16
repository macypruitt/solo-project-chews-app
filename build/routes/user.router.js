"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authentication_middleware_1 = __importDefault(require("../modules/authentication-middleware"));
var pool_1 = __importDefault(require("../modules/pool"));
var user_strategy_1 = __importDefault(require("../strategies/user.strategy"));
var encryption_1 = require("../modules/encryption");
var router = express_1.default.Router();
router.get('/', authentication_middleware_1.default, function (req, res) {
    res.send(req.user);
});
router.post('/register', function (req, res, next) {
    var username = req.body.username;
    var password = encryption_1.encryptPassword(req.body.password);
    var queryText = "INSERT INTO \"user\" (username, password) VALUES ($1, $2) RETURNING id";
    pool_1.default.query(queryText, [username, password])
        .then(function () { return res.sendStatus(201); })
        .catch(function (err) {
        console.log("Error saving user to database: " + err);
        res.sendStatus(500);
    });
});
router.post('/login', user_strategy_1.default.authenticate('local'), function (req, res) {
    res.sendStatus(200);
});
router.post('/logout', function (req, res) {
    req.logout();
    res.sendStatus(200);
});
exports.default = router;
