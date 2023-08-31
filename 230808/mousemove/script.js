const dot = document.querySelector('.dot')
window.addEventListener('mousemove', (event) => {    
    requestAnimationFrame(() => mouseMove(event))
})
const mouseMove = (event) => {
    // .dot의 좌표를 clientX, clientY로 할당
    // console.log('마우스의 X좌표 :' + event.clientX)
    // console.log('마우스의 Y좌표 :' + event.clientY)
    dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px'
    dot.style.top = event.clientY - (dot.clientHeight / 2)+ 'px'
}
window.addEventListener('click', () => {
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    setTimeout(() => {
        bubble.remove()
    },1000)
})