"use strict";
// number
var age = 18;
var stature = 178.5;
// console.log(age)
// console.log(stature)
// string
var fjh = 'my name is fangjianhui';
// console.log(fjh)
// boolean
var bb = true;
var cc = false;
// enum枚举
var REN;
(function (REN) {
    REN[REN["top"] = 0] = "top";
    REN[REN["right"] = 1] = "right";
    REN[REN["left"] = 2] = "left";
})(REN || (REN = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var Sport;
(function (Sport) {
    Sport["one"] = "\u7BEE\u7403";
    Sport["two"] = "\u8DB3\u7403";
    Sport["three"] = "\u5175\u4E53\u7403";
    Sport["four"] = "\u7FBD\u6BDB\u7403";
})(Sport || (Sport = {}));
var r = REN.left;
var c = Color[2];
var s = Sport.one;
console.log(typeof r, c, s);
// any
var t = 10;
t = 'fjh';
t = true;
