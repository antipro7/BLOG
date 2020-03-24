"use strict";
var Sport;
(function (Sport) {
    Sport[Sport["\u7BEE\u7403"] = 0] = "\u7BEE\u7403";
    Sport[Sport["\u8DB3\u7403"] = 1] = "\u8DB3\u7403";
    Sport[Sport["\u4E52\u4E53\u7403"] = 2] = "\u4E52\u4E53\u7403";
})(Sport || (Sport = {}));
;
function sport(type) {
    var s = Sport[type];
    return "\u4F60\u9009\u62E9\u7684\u8FD0\u52A8\u662F" + s;
}
// console.log(sport(0))
// 有可选参数的函数
function sport2(type, strength) {
    var s = Sport[type];
    var str = '';
    str = "\u4F60\u9009\u62E9\u7684\u8FD0\u52A8\u662F" + s;
    if (strength !== undefined) {
        str = str + (",\u5F3A\u5EA6\u662F" + strength);
    }
    return str;
}
// console.log(sport2(1))
// console.log(sport2(1, '高强度'))
// 带默认参数的函数
function sport3(type, strength) {
    if (type === void 0) { type = 2; }
    if (strength === void 0) { strength = '一般强度'; }
    var s = Sport[type];
    var str = '';
    str = "\u4F60\u9009\u62E9\u7684\u8FD0\u52A8\u662F" + s;
    if (strength !== undefined) {
        str = str + (",\u5F3A\u5EA6\u662F" + strength);
    }
    return str;
}
console.log(sport3());
