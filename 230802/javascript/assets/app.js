const title = document.getElementById('title')
console.log(title.textContent) 
const content = document.getElementById('content')
console.log(content.textContent)

content.classList.add('active')


// innerHTML, innerText, textContent
// innerHTML : 태그를 넣을 수 있다. 
// title.innerHTML = '<span>span 태그 적용</span>'
// title.innerText = '<span>span 태그 적용</span>'
// title.textContent = '<span>span 태그 적용</span>'

// content 내용을 바꿔보세요
// content.textContent = '내용을 바꿨습니다.'

title.style.color = 'red'
title.style.fontSize = '60px'
title.style.marginTop = '0'
title.style.marginBottom = '0'

