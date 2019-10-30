let oldArr = ['john-reese', 'harold-finch', 'sameen-shaw']
// 转换成
let targetArr = [{ name: 'John Reese' }, { name: 'Harold Finch' }, { name: 'Sameen Shaw' }]

// 面向过程编程
function trans(arr) {
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split('-')
    let nameArr = []
    for (let j = 0; j < temp.length; j++) {
      let nameItem = temp[j][0].toUpperCase() + temp[j].slice(1)
      nameArr.push(nameItem)
    }
    resultArr.push({ name: nameArr.join(' ') })
  }
  return resultArr
}

// 函数式编程
const curUser = {
  name: 'Peter'
}

const saySth = (user, str) => user.name + ':' + str
const changeName = (user, name) => ({
  ...user, name
})

let person = {
  names: [
    'Fang Jianhui',
    'Fang kong',
    'James Harden',
    'Stephen Fang',
    'Stephen Curry'
  ]
}

// 不传参时返回所有name
function find0() {
  return this.names
}

// 传一个参数时，返回firstName匹配的name
function find1(firstName) {
  let result = []

  this.names.forEach(item => {
    let itemList = item.split(' ')
    if (itemList[0] === firstName) result.push(item)
  })

  if (result.lenght === 0) return '不存在'
  else return result
}

// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName) {
  let result = []

  this.names.forEach(item => {
    let itemList = item.split(' ')
    if (itemList[0] === firstName && itemList[1] === lastName) result.push(item)
  })

  if (result.lenght === 0) return '不存在'
  else return result
}

/**
 * @param {object} object 绑定的对象
 * @param {string} name 重载的函数名
 * @param {function} fn 
 */
function addMethod(object, name, fn) {
  // old 保存每次传进来的fn
  let old = object[name]
  
  object[name] = function () {
    console.log(1)

    // fn.length 形参个数  arguments.length 实参个数
    if (fn.length === arguments.length) {
      console.log(2)

      return fn.apply(this, arguments)
    } else if (typeof old === 'function') {
      console.log(3)
      
      return old.apply(this, arguments)
    }
  }
}

addMethod(person, 'find', find0)
addMethod(person, 'find', find1)
addMethod(person, 'find', find2)