const title = document.getElementById('title')
// 문자열을 배열로 만듦
const text = title.textContent.split('')
//['L', 'o', 'r', 'e', 'm', ',', ' ', 'i', 'p', 's', 'u', 'm', ' ', 'd', 'o', 'l', 'o', 'r', '.']

title.textContent = ''
for(let i = 0; i < text.length; i++){
    const span = document.createElement('span')
    span.append(text[i])    
    title.append(span)
    setTimeout(() => {
        span.classList.add('reveal')
    }, i * 200)
    // console.log(span)
}
// text -> 하나씩 꺼내서 span태그에 추가
// <span>L</span>.....
// span 태그로 묶어서 title에 추가
// for/forEach문 안에서 해야할일
// 1. createElement
// 2. 추가(append)
