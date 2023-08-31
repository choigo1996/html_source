const title = document.querySelector('#title')
const button = document.querySelector('#button')

// button을 눌렀을때
button.addEventListener('click', () => {
    if(title.classList.contains('active')){
        console.log(title.classList.contains('active'))
        title.classList.remove('active')
        // title 문자열 변경 -> 'active클래스 제거'
        title.textContent = '클래스 제거'
    } else {
        console.log(title.classList.contains('active'))
        title.classList.add('active')
        // title 문자열 변경 -> 'active클래스 추가'
        title.innerText = '클래스 추가'
    }
})
