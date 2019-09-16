"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/**
 * GET route template
 */
router.get('/', function (req, res, next) {
});
/**
 * POST route template
 */
router.post('/', function (req, res, next) {
    res.sendStatus(201);
});
module.exports = router;
