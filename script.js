let works = [];
let editIndex = null;

// 保存済みデータを読み込む
let savedWorks = localStorage.getItem("works");

if (savedWorks) {
  works = JSON.parse(savedWorks);
}

// 画面切り替え
function showHomeScreen() {
  document.getElementById("homeScreen").classList.remove("hidden");
  document.getElementById("inputScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.add("hidden");
}

function showInputScreen() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("inputScreen").classList.remove("hidden");
  document.getElementById("reviewScreen").classList.add("hidden");
}

function showReviewScreen() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("inputScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.remove("hidden");

  showWorks();
}

// 作品保存
function saveWork() {
  let work = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    chineseText: document.getElementById("chineseText").value,
    pinyin: document.getElementById("pinyin").value,
    japanese: document.getElementById("japanese").value,
    memo: document.getElementById("memo").value
  };

  if (editIndex === null) {
    works.push(work);
  } else {
    works[editIndex] = work;
    editIndex = null;
  }

  localStorage.setItem("works", JSON.stringify(works));

  clearForm();
  alert("保存しました");
  showHomeScreen();
}

// 復習画面に表示
function showWorks() {
  let workList = document.getElementById("workList");
  workList.innerHTML = "";

  for (let i = 0; i < works.length; i++) {
    workList.innerHTML += `
      <div class="card">
        <h3>${works[i].title}</h3>
        <p><strong>作者：</strong>${works[i].author}</p>

        <h4>中国語本文</h4>
        <p>${works[i].chineseText}</p>

        <h4>ピンイン</h4>
        <p>${works[i].pinyin}</p>

        <h4>日本語訳</h4>
        <p>${works[i].japanese}</p>

        <h4>メモ</h4>
        <p>${works[i].memo}</p>

        <button onclick="deleteWork(${i})">削除</button>
      </div>
    `;
  }
}

// 削除
function deleteWork(index) {
  works.splice(index, 1);

  localStorage.setItem("works", JSON.stringify(works));

  showWorks();
}

// 入力欄リセット
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("chineseText").value = "";
  document.getElementById("pinyin").value = "";
  document.getElementById("japanese").value = "";
  document.getElementById("memo").value = "";
}

function searchWorks() {
  let keyword = document.getElementById("searchInput").value;
  let workList = document.getElementById("workList");

  workList.innerHTML = "";

  for (let i = 0; i < works.length; i++) {
    if (
      works[i].title.includes(keyword) ||
      works[i].author.includes(keyword)
    ) {
      workList.innerHTML += `
        <div class="card">
          <h3>${works[i].title}</h3>
          <p><strong>作者：</strong>${works[i].author}</p>
          <p><strong>中国語：</strong><br>${works[i].chineseText}</p>
          <p><strong>ピンイン：</strong><br>${works[i].pinyin}</p>
          <p><strong>日本語訳：</strong><br>${works[i].japanese}</p>
          <p><strong>メモ：</strong><br>${works[i].memo}</p>

          <button onclick="editWork(${i})">修正</button>
          <button onclick="deleteWork(${i})">削除</button>
        </div>
      `;
    }
  }
}

function editWork(index) {
  editIndex = index;

  let work = works[index];

  document.getElementById("title").value = work.title;
  document.getElementById("author").value = work.author;
  document.getElementById("chineseText").value = work.chineseText;
  document.getElementById("pinyin").value = work.pinyin;
  document.getElementById("japanese").value = work.japanese;
  document.getElementById("memo").value = work.memo;

  showInputScreen();
}