const buttons = document.querySelectorAll('.tab-button')
const contents = document.querySelectorAll('.tab-item')

// buttons.forEach((button,index) => {
//     button.addEventListener('click',() => {
//         // 활성화 된 요소들을 전부 제거
//         buttons.forEach(button => button.classList.remove('selected'))
//         contents.forEach(content => content.classList.remove('show'))
//         // 클릭한 요소의 index와 동일한 컨텐츠 활성화
//         button.classList.add('selected')
//         contents[index].classList.add('show')
//     })
// })

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        for(let j = 0; j < buttons.length; j++){
            buttons[j].classList.remove('selected')
            contents[j].classList.remove('show')
        }
        buttons[i].classList.add('selected')
        contents[i].classList.add('show')
    })
}