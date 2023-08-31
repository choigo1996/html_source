const title = document.querySelector('h1')
const startBtn = document.querySelector('#start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
const list = document.getElementById('list')
// setTimeout(() => {
//     title.style.color = 'red';
//     title.textContent = '빨간색'
// }, 1000)
// setTimeout(() => {
//     title.style.color = 'blue';
//     title.textContent = '파란색'
// }, 2000)
// console.log('3번째')
// 초기값 0
let index = 0;
let timerId;
console.log('timerId:'+timerId)
startBtn.addEventListener('click', () => {
    // timerId에 값이 있는지 확인
    if(timerId){
        // timerId에 값이 있다면, clear
        clearInterval(timerId)
    }
    // timerId 에 새로운 setInterval 할당
    timerId = setInterval(() => {
        index++
        title.textContent = index
    }, 10)
    console.log('할당된 timerId:'+timerId)
})

stopBtn.addEventListener('click', () => {
    // timerID에 할당된 setInterval 해제
    clearInterval(timerId)
    console.log('클리어된 id:'+ timerId)

    const li = document.createElement('li')
    li.textContent = index
    list.append(li)

    const items = list.querySelectorAll('li');
    items.forEach((element, index) => {
        console.log('element :' + element)
        console.log('index :' + index)
    })
})
resetBtn.addEventListener('click', () => {
  index = 0;
  title.textContent = index  
  const items = list.querySelectorAll('li');
//   for(let i = 0; i < items.length; i++){
//     items[i].remove()
//   }
//   items.forEach(a => a.remove())

})

