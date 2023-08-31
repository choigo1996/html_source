const dataList = document.querySelectorAll('[data-counter]')
// console.log(dataList)

// for(let i = 0; i < dataList.length; i++){
//     // 'dataset' === 'data-'
//     const target = dataList[i].dataset.counter;
//     let index = 0;
//     const timerText = dataList[i].querySelector('.timer')
//     const step = Math.floor(target / 200)
//     console.log(step)
//     // console.log(target)
//     // setInterval
//     // index가 target이 될때까지 증가
//     // 예시) target:3600, index가 3600이 될때까지 증가
//     setInterval(()=>{
//         if(index < target){
//             index = index + step
//             // console.log(index)    
//             timerText.textContent = index        
//         }
//     }, 1)
// }

dataList.forEach(data => {
    let index = 0;
    let percentage = 0;
    const target = data.dataset.counter;
    const timerText = data.querySelector('.timer')
    const perNode = data.querySelector('.percentage')
    const step = Math.floor(target / 400)
    console.log(step)
    // console.log(target)
    // setInterval
    // index가 target이 될때까지 증가
    // 예시) target:3600, index가 3600이 될때까지 증가
    setInterval(()=>{
        if(index < target){
            index = index + step
            percentage = (index / target) * 100
            // console.log(index)    
            timerText.textContent = index        
            perNode.style.width = percentage + '%'
        }
    }, 10)
})