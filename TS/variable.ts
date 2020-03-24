// number
let age: number = 18;
let stature: number = 178.5;
// console.log(age)
// console.log(stature)

// string
let fjh: string = 'my name is fangjianhui';
// console.log(fjh)

// boolean
let bb: boolean = true;
let cc: boolean = false;

// enum枚举
enum REN {top, right, left}
enum Color {Red = 1, Green, Blue = 4}
enum Sport {one = '篮球', two = '足球', three = '兵乓球', four = '羽毛球'}
let r: REN = REN.left;
let c: String = Color[2];
let s: String = Sport.one;
console.log(typeof r, c, s)

// any
let t: any = 10;
t = 'fjh';
t = true;