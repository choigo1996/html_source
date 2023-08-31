const addNumber = function add(first, second){
    return Number(first) + Number(second);
}
// console.log(addNumber("24", "2"))

// es5
function addES5(x, y) {
    return x + y
}
// es6
// fat arrow function
const addES6 = (x, y) => {
    return x + y;
}
// 하는 일이 한줄일때 압축해서 사용 가능
const addFunc = (x, y) => x + y;
console.log("x와 y값을 더하면 " + addFunc(6,7))
