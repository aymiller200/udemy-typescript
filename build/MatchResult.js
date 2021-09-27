"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
/*
!enum - enumeration: essentially an object that stores very closely related values. These objects will always either be numbers or strings. Main purpose of using an enum is to signal to other engineers that this is a collection of very cloesely related values.
      * When we create an enum, we also create a new type in typescript. The type here would be MatchResult.
      * Reference enums like we reference objects = MatchResult.HomeWin
      * It is possible to define an enum without any values inside of it.
      * Use whenever we have a small fixed set of values that are all closely related and known at compile time.
*/
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
