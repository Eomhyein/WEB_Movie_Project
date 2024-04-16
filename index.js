// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

//Firebase 내꺼 주소 노출 안되게 올리기
const firebaseConfig = {

};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//id 값에 click을 준 것!
$("#postingbtn").click(async function () {
  let image = $('#image').val();
  let titIe = $('#titIe').val();
  let star = $('#star').val();
  let comment = $('#comment').val();

  let doc = {
    'image': image,
    'titIe': titIe,
    'star': star,
    'comment': comment
  };
  await addDoc(collection(db, "movies"), doc);
  alert('저장 완료');
  window.location.reload();
})

$("#savebtn").click(async function () {
  $('#postingbox').toggle();
})

//카드 붙이는 코드
let docs = await getDocs(collection(db, "movies"));
docs.forEach((doc) => {
  let row = doc.data();

  let image = row['image'];
  let title = row['title'];
  let comment = row['comment'];
  let star = row['star'];

  let temp_html = `
  <div class="col">
    <div class="card h-100">
      <img src="${image}"
        class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${star}</p>
        <p class="card-text">${comment}</p>
      </div>
    </div>
  </div>`;

  $('#card').append(temp_html);
});