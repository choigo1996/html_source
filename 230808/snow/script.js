// wrapper에 <span class="snow"></span>을 
// 생성해서 추가
// 1. 태그를 생성
// const snow = document.createElement('span')
// 2. 클래스 추가
// snow.classList.add('snow')
// 3. wrapper에 삽입
// wrapper.append(snow)
// 해야할 일
// wrapper 에 snow를 100개 추가
const wrapper = document.querySelector('.wrapper')

// function addSnow(){}
const addSnow = () => {
    const size = randomNumber(8,3)
    const snow = document.createElement('span')
    snow.classList.add('snow')
    // left값을 random으로 1~100%을 할당    
    snow.style.left = `${randomNumber(100, 1)}%`
    // animationDuration을 랜덤으로 적용
    snow.style.animationDuration = `${randomNumber(30, 10)}s`
    snow.style.animationDelay = `${randomNumber(12,1)}s`
    // snow의 width, height 값 변경
    snow.style.width = `${size}px`
    snow.style.height = `${size}px`
    // opacity
    snow.style.opacity = Math.random()
    // blur
    // `문자열${자바스크립트}문자열`
    snow.style.filter = `blur(${randomNumber(10,1)}px)`
    wrapper.append(snow)
}

const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
}

for(let i = 0; i < 100; i++){
    addSnow()
}