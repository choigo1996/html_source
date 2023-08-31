const count = document.getElementById('count')
const incButton = document.getElementById('inc')
const decButton = document.getElementById('dec')
// console.log(button)
console.log(count)

let value = 0
// button.addEventListener('click', function() {})
incButton.addEventListener('click', () => {
    count.textContent = ++value
})
decButton.addEventListener('click', () => {
    count.textContent = --value
})

function add(a, b){
    return a + b
}
console.log(add(2,3))

function message(func){
    return console.log(func)
}
message(add(3,5))

const showMessage = () => {
    return console.log('message2')
}
showMessage()