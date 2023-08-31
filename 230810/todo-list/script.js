const input = document.getElementById("add-todo");
const addButton = document.querySelector(".add-button");
const list = document.getElementById("list");
// console.log(input)
// console.log(addButton)
// console.log(list)

// 사용자 입력을 받아서 추가하는 함수
const addItem = () => {
    // 사용자가 빈 값을 넣었는지 확인
    if (!input.value) {
        return alert('내용을 입력해주세요')
    }
    // li 요소 생성
    const li = document.createElement('li')
    // li 안에 button 아이콘 추가
    li.innerHTML = `${input.value}<button class="list-delete">&#x2716</button>`
    // li에 list-item 클래스 추가,(아이콘이 붙는다)
    li.classList.add('list-item')
    // 리스트(ul)에 li 추가
    list.append(li)
    // 값을 비워준다
    input.value = ''
    // 포커스 활성화
    input.focus()
    // console.log(input.value)
    saveList(list.innerHTML)
}

// input 키보드 이벤트가 발생했을때 
input.addEventListener("keydown", (e) => {
    // 엔터키를 누르면 addItem 함수로 내용 추가
    if (e.key === 'Enter') {
        return addItem()
    }
})

// 추가 버튼을 눌렀을 경우 addItem 함수 작동
addButton.addEventListener('click', () => {
    addItem()
})

// list 클릭했을 경우 자식 요소들에게 이벤트 위임
list.addEventListener('click', (e) => {
    // currentTargat, event가 걸려있는 대상만 감지.
    console.log(e.currentTarget)
    // target, 클릭한 대상을 감지.
    console.log(e.target)

    // 자식요소가 li일 경우
    if(e.target.tagName === 'LI'){
        // checked 클래스 유무 확인 후 추가 또는 삭제
        // if(e.target.classList.contains('checked')){
        //     e.target.classList.remove('checked')
        // } else {
        //     e.target.classList.add('checked')
        // }

        // checked 클래스 토글
        e.target.classList.toggle('checked')
        // localStorage에 저장
        saveList(list.innerHTML)
    }

    // 삭제 버튼을 클릭했을 경우 
    if(e.target.tagName === 'BUTTON'){
        // 삭제버튼의 부모요소 li 삭제 
        e.target.parentElement.remove();
        // localStorage에 저장
        saveList(list.innerHTML)
    }
})

const saveList = (list) => {
    // localStorage에 'todo'라는 키 값으로 저장
    // object를 정상적으로 담을 수 없어서 
    // 문자열 형태로 담음
    localStorage.setItem('todo', JSON.stringify(list))
}

// localStorage에 담은 내용 로드 
const loadList = () => {
    // 문자열 형태로 담긴 todo 내용을 객체로 파싱
    const getList = JSON.parse(localStorage.getItem('todo'))
    // list에 localStorage에서 받아온 내용 추가
    list.innerHTML = getList
}

// 문서가 모두 로드되고 나면 loadList 함수 실행
document.addEventListener('load', loadList())