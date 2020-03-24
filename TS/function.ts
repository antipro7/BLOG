enum Sport {篮球, 足球, 乒乓球};

function sport(type: number): string {
  let s: string = Sport[type];

  return `你选择的运动是${s}`;
}
// console.log(sport(0))

// 有可选参数的函数
function sport2(type: number, strength?: string) {
  let s: string = Sport[type];
  let str: string = '';
  str = `你选择的运动是${s}`

  if (strength !== undefined) {
    str = str + `,强度是${strength}`;
  }

  return str;
}
// console.log(sport2(1))
// console.log(sport2(1, '高强度'))

// 带默认参数的函数
function sport3(type: number = 2, strength: string = '一般强度') {
  let s: string = Sport[type];
  let str: string = '';
  str = `你选择的运动是${s}`;

  if (strength !== undefined) {
    str = str + `,强度是${strength}`;
  }

  return str;
}
// console.log(sport3())

// 有剩余参数的函数
function sport4(...xuqiu: string[]): string {
  let str = '你选择的运动是';
  for (let i = 0; i < xuqiu.length; i++) {
    
  }
}