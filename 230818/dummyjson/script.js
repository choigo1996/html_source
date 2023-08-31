// 초기화 함수
function init() {
  // list 라는 html 요소
  const list = document.getElementById("list");
  // 서버에 데이터를 GET 요청
  // GET, POST, PUT, PATCH, DELETE
  // GET
  fetch("./dummy.json")
    .then((res) => res.json()) // 서버로부터 날아온 문자열을 JSON 객체로
    .then((json) => {
      // 데이터 확인
      console.log(json);
      // json 객체 안의 products 배열에 접근하여 for문 실행
      json.products.forEach((element) => {
        // li element 생성
        const li = document.createElement("li");
        // li 안에 html 태그 삽입
        li.innerHTML = `
          <figure class="image">
              <img src="${element.thumbnail}" alt="${element.title}"/>
          </figure>
        <div>
        <span>${element.category}</span> | <span>${element.brand}</span>
        </div>
          <strong>${element.title}</strong>
          <p>${element.description}</p>
              `;
        list.append(li);
      });
    });
}

//document 요소가 모두 로드 됐을때 실행
document.addEventListener("load", init());
