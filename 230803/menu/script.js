const wrapper = document.querySelector('.site__header');
const menu = document.querySelector('.menu');
const menuItem = Array.from(menu.querySelectorAll('.menu-item'));

for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click',() => {
        for(let j = 0; j < menuItem.length; j++){
            menuItem[j].classList.remove('active')
        }
        menuItem[i].classList.add('active')
    })
}
