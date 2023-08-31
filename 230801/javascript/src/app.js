const title = document.getElementById('title')

const subTitle = document.getElementById('subTitle')
console.log(title)
console.log(subTitle)

subTitle.style.color = 'rgb(200,0,0)'
subTitle.style.fontSize = '60px'
title.innerHTML = '<span>바뀐 제목입니다.</span>'
title.innerText = '<span>innerText로 변경된 제목</span>'
subTitle.textContent = '<span>textContent로 바꾼 제목</span>'