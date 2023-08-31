// PI
// console.log(Math.PI)

// 절대값
// console.log(Math.abs(-1))
// console.log(Math.abs(1))
// console.log(Math.abs('-1'))

// 소수점, 최대값, 최소값, 절대값, 결과값
// 소숫점, 최댓값, 최솟값, 절댓값, 결괏값
// Round , 반올림, 소숫점 이하를 반올림
// console.log(Math.round(1.5))
// console.log(Math.round(-1.3))

// Ceil , 올림, 소숫점 이하를 올림
// console.log(Math.ceil(1.2))
// console.log(Math.ceil(-1.2))

// floor, 버림, 소숫점 이하를 버림
// console.log(Math.floor(1.999999999))
// console.log(Math.floor(-1.999999999))

// Random, 난수, 랜덤숫자.
// 0부터 1미만의 숫자
// 0 ~ 0.999999999...
// console.log(Math.random())
// const random = Math.floor(Math.random() * 5 + 1);
let max = 8;
let min = 3;
const random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random)