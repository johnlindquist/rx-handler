"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function handler() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
    }
    var subject = new rxjs_1.Subject();
    var source = subject.pipe.apply(subject, operations.concat([operators_1.share()]));
    var next = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return subject.next.apply(subject, args);
    };
    next[rxjs_1.observable] = function () { return source; };
    return next;
}
exports.handler = handler;
