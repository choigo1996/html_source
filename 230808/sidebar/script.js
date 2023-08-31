const trigger = document.getElementById('trigger')
const sidebar = document.getElementById('sidebar')
const overlay = document.querySelector('.overlay')
// 열기/닫기 버튼을 눌렀을때
trigger.addEventListener('click',() =>{
    // sidebar에 open클래스가 있는지 유무
    if(sidebar.classList.contains('open')){
        // true, 'open' class가 있다면 삭제
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        // 열기로 텍스트 변경
        trigger.textContent = '열기'
    } else {
        // false, 'open' class가 없을 경우 추가
        sidebar.classList.add('open')
        overlay.classList.add('open')
        // '닫기'로 텍스트 변경
        trigger.textContent = '닫기'
    }
    // sidebar.classList.toggle('open')
})
// overlay를 눌렀을때 처리
overlay.addEventListener('click', () => {
    // sidebar가 열려있을때 판단
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    }
})