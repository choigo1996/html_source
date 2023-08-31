const title = document.getElementById('title');
const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');
console.log(title,incButton,decButton);

// font 기본사이즈
let size = 0;
// title.style.fontSize = size + 'px' // '20px'

// 증가버튼을 눌렀을때
incButton.addEventListener('click',() => {
    // 기본사이즈에 1을 더한다
    size = size + 10;
    // fontsize에 size값 적용
    // title.style.fontSize = size + 'px';
    // translate(25px)
    // title.style.transform = 'translateX(' + size + 'px' +')'    
    // title.style.transform = 'rotate(' + size + 'deg' +')'    
    // hsl(color Hue, saturation, lightness)
    title.style.color = 'hsl('+ size +', 50%, 50%)'
    // 스타일시트가 요구하는 값
    console.log(size + 'px');
})
// 감소버튼을 눌렀을때
decButton.addEventListener('click', () => {
    size = size - 1;
    title.style.fontSize = size 
})