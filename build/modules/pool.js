"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __importDefault(require("pg"));
var url_1 = __importDefault(require("url"));
var config = {};
if (process.env.DATABASE_URL) {
    var params = url_1.default.parse(process.env.DATABASE_URL);
    var auth = params.auth.split(':');
    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000,
    };
}
else {
    config = {
        host: 'localhost',
        port: 5432,
        database: 'UPDATE_ME',
        max: 10,
        idleTimeoutMillis: 30000,
    };
}
var pool = new pg_1.default.Pool(config);
pool.on('error', function (err) {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});
exports.default = pool;
