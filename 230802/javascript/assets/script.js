// var, let, const
// let, const
// do : let 값을 바꿀 수 있다. 
let username = '홍길동'
username = '강아지'

// don't : const는 값을 바꿀 수 없다.
let name = '강아지'
// console.log(name)

// boolean - 참,또는 거짓
let value = true
value = false
// console.log(value)

// null
// let nullValue;
let nullValue = null;

// undefined
let undefValue;
// console.log(undefValue)

// number
let numberValue = 11;

// string
let stringValue = '문자열값'

// object
let objValue = { }

// + , -, *, /, %
let a = 4;
let b = 2;
a = a % b
a %= b
// console.log(a)

// 증가 연산자, 감소 연산자
let x = 1;
const y = x++
// console.log(x, y)

let valueOne = 2;
const valueTwo = --valueOne
console.log(valueOne, valueTwo)
