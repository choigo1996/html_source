// for (초기값, 조건, 증가)
// for(let i = 0;i < 5;i++){
//     console.log(i)
// }
// for(let x = 1; x <= 9;x++){
//     // 1부터 9까지 숫자를 얻어낸다.
//     for(let y = 1; y <= 9; y++){
//         // x: 1~9까지 순서대로 들어온다.
//         // y: 1~9까지 순서대로 들어온다.
//         console.log(x + ' X ' + y + ' = ' + x * y)
//     }
// }

let star = ''
for (let i = 0; i < 5; i++) {
    if (i === 0 || i > 1) {
        star += "*";
    } else {
        star += "o";
    }
    console.log(star)
}
