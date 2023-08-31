const items = document.querySelectorAll('.list-item')
// for문으로 작성한 케이스 
// for (let i = 0; i < items.length; i++) {
//     // 클릭할때마다
//     items[i].addEventListener('click', () => {
//         // 전체 클래스 삭제
//         for(let j = 0; j < items.length; j++){
//             items[j].classList.remove('selected')
//         }
//         // class추가
//         items[i].classList.add('selected')
//     })
// }

// forEach 문으로 바꾼 케이스
items.forEach((item) => {    
    item.addEventListener('click', ()=>{
        if(item.classList.contains('selected')){
            item.classList.remove('selected')
        } else {
            items.forEach((listItem) => {
                listItem.classList.remove('selected')
            })
            item.classList.add('selected')
        }
    })
})

// 하는 일이 같다
for(let i =0; i < items.length; i++){
    console.log(items[i], i)
}
// 하는 일이 같다
items.forEach((item,index) => {
    console.log(item, index)
})

