const menu = ['막걸리','단무지','물','짜장면','간장','쌈장','까나리액젓']
// console.log(menu[0])
// console.log(menu[1])
// console.log(menu[2])
// console.log(menu[3])

// console.log(menu[random])
const button = document.getElementById('button')
const result = document.getElementById('result')
button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * menu.length)
    result.textContent = menu[random]
})