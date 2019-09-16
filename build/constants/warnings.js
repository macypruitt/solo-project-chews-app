"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badSecret = "\n----------------------------\n\n*** WARNING ***\nYour application is not very secure.\nYou need to set SERVER_SESSION_SECRET to a better secret\nPlease follow the README and add a .env file\n\nIt should be\n- longer than 8 characters\n- not \"superDuperSecret\"\n\nIf this warning is showing on Heroku,\nadd or change your SERVER_SESSION_SECRET environment variable!\n\n----------------------------";
exports.exampleBadSecret = 'superDuperSecret';
