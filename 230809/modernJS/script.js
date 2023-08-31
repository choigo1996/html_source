// import add from './add.js'
// import multiply from './multiply.js'
// import add, { multiply as multi} from './math.js'
// import add, * as math from './math.js'

// console.log(add(2,3))
// console.log(math.multiply(2,3))

// 객체
// const person = {
//     name: '짱구',
//     age: 5
// }
// 기본적으로 상수는 바꿀 수 없지만, 
// 배열,객체라는 자료형만 유지된다면, 
// 배열,객체안의 데이터는 변경되어도 허용이 된다. 
// person.name = '훈이'
// console.log(person.name)
// console.log(person.age)
const characters = [
    {
        id: 0,
        name: '짱구',
        age: 5,
    },
    {
        id: 1,
        name: '훈이',
        age: 5,
    },
    {
        id: 2,
        name: '철수',
        age: 5,
    },
    {
        id: 3,
        name: '맹구',
        age: 5,
    },
    {
        id: 4,
        name: '짱아',
        age: 1,
    },
    {
        id: 5,
        name: '이슬이',
        age: 20,
    },
    {
        id:6,
        name: '신형만',
        age: 40,
    }
]
// console.log(characters.length)
for(let i = 0;i < characters.length; i++){
    // console.log(characters[i].name)
}
// 모든 캐릭터의 정보를 출력해주세요
// 예시 : '짱구의 나이는 5살입니다.'
const list = document.getElementById('list')
characters.forEach(person => {
    const li = document.createElement('li')
    li.textContent = `${person.name}의 나이는 ${person.age}입니다`    
    list.append(li)
})
// 예시 : '짱구의 10년뒤 나이는 15살입니다.'
// const a = '10'
// const b = 10 
// console.log(+a + b)
// const text = ('b' + 'a' + + 'a' + 'a').toLowerCase()
// console.log(text)