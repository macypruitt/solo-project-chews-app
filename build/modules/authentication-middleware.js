"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rejectUnauthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.sendStatus(403);
    }
};
exports.default = rejectUnauthenticated;
