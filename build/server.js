"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var session_middleware_1 = __importDefault(require("./modules/session-middleware"));
var user_strategy_1 = __importDefault(require("./strategies/user.strategy"));
var user_router_1 = __importDefault(require("./routes/user.router"));
require('dotenv').config();
var app = express_1.default();
// Body parser middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Passport Session Configuration //
app.use(session_middleware_1.default);
// start up passport sessions
app.use(user_strategy_1.default.initialize());
app.use(user_strategy_1.default.session());
/* Routes */
app.use('/api/user', user_router_1.default);
// Serve static files
app.use(express_1.default.static('build'));
// App Set //
var PORT = process.env.PORT || 5000;
/** Listen * */
app.listen(PORT, function () {
    console.log("So awesome. Much wow. Listening on port: " + PORT);
});
exports.default = app;
