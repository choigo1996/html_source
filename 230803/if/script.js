// string, number, null, undefined, object, array...
// 괄호 안에 조건
// if( condition ) {
//     // 해야할 일
// }
let x = 1
x == 1 // true, x와 1이 같다
x != 1 // false, x와 1이 다르다
x === 1 // true, x와 1의 값과 타입이 같다
x !== 1 // false, x와 1의 값과 타입이 다르다
x > 1 // false, x가 1보다 크다
x >= 1 // true, x가 1보다 크거나 같다
x < 1 // false, x가 1보다 작다
x <= 1 // true, x가 1보다 작거나 같다

1 == '1' // true, 1과 '1'이 값이 같다
1 === '1' // false, 1과 '1'은 타입까지 판단해보니 다르다.

// const a = 10
// if( a > 10 ){
//     // true, 참일때만 실행이 됩니다.
//     console.log('a는 10보다 큽니다.')
// } else if (a < 10){
//     // 위의 조건이 false,
//     // 새로 true 여부를 판단
//     console.log('a는 10보다 작습니다.')
// } else {
//     console.log('a와 10은 같습니다.')
// }

const b = '2'
// 두가지 조건이 참일때만 AND
// if(typeof b !== 'string' && b > 1)
// 둘중에 하나라도 참일때 OR
// if(typeof b !== 'string' || b > 1)

if(typeof b !== 'string' && b > 1){
    // 참일 경우 시켜야할 일
    console.log('b는 1보다 큽니다')
} else {
    // 거짓일 경우 시켜야할 일
    console.log('뭔지 모르겠습니다.')
}

// number, string, null, undefined...
const value = 1

if(typeof value === 'string'){
    console.log('문자열입니다')
} else if( typeof value === 'number'){
    console.log('숫자형입니다')
} else {
    console.log('타입을 알수 없습니다')
}