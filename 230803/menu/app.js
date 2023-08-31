// const brand = document.querySelector('.brand')
// console.log(brand)
const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem)

for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click',() => {
        // 모든 요소에서 active 제거
        for(let j = 0; j < menuItem.length; j++){
            menuItem[j].classList.remove('active')
        }        
        // 현재 클릭한요소한테만 acitve
        menuItem[i].classList.add('active')        
    })
}