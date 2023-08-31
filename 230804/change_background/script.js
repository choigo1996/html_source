const button = document.getElementById('button')
const container = document.querySelector('.container')

// button 에 addEventListener 
button.addEventListener('click',() => {
    // active 클래스 유무에 따라서 true / false
    // container.classList.contains('active')

    // if(container.classList.contains('active')){
    //     // 참일때 실행, active 삭제
    //     container.classList.remove('active')
    // } else {
    //     // 거짓일때 실행, active 추가
    //     container.classList.add('active')
    // }
    
    // 삼항 연산자
    // 조건 ? 참 : 거짓
    // container.classList.contains('active') ? container.classList.remove('active') : container.classList.add('active')

    container.classList.toggle('active')    
    
})