const text = () => {
    console.log('text')
}
const first = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('1번째'),3000)    
})
const second = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('2번째'),2000)
}) 
const third = () => new Promise((resolve, reject) => {
    resolve('3번째')
}) 
// text()
first()
.then((result) => {
    console.log(result)
    return second()
})
.then(result => {
    console.log(result)
    return third()
})
.then(result => console.log(result))
.catch(e => console.error(e))