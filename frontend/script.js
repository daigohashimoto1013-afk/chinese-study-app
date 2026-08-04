let works = [];

let editingWorkId = null;

const API_URL = "http://localhost:8080/works";

// 画面切り替え
function showHomeScreen() {
  document.getElementById("homeScreen").classList.remove("hidden");
  document.getElementById("inputScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.add("hidden");

  editingWorkId = null;
  clearForm();
}

function showInputScreen() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("inputScreen").classList.remove("hidden");
  document.getElementById("reviewScreen").classList.add("hidden");
}

async function showReviewScreen() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("inputScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.remove("hidden");

  await fetchWorks();
  showWorks(works);
}

// Javaから作品一覧を取得
async function fetchWorks() {
  const response = await fetch(API_URL);
  works = await response.json();
}

// 作品保存・修正
async function saveWork() {
  let work = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    chineseText: document.getElementById("chineseText").value,
    pinyin: document.getElementById("pinyin").value,
    japanese: document.getElementById("japanese").value,
    memo: document.getElementById("memo").value
  };

  // 新規保存
  if (editingWorkId === null) {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(work)
    });
  }

  // 修正保存
  else {
    await fetch(`${API_URL}/${editingWorkId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(work)
    });

    editingWorkId = null;
  }

  clearForm();
  alert("保存しました");
  showHomeScreen();
}

// 復習画面に表示
function showWorks(displayWorks) {
  let workList = document.getElementById("workList");
  workList.innerHTML = "";

  if (displayWorks.length === 0) {
    workList.innerHTML = "<p>まだ作品が登録されていません。</p>";
    return;
  }

  for (let i = 0; i < displayWorks.length; i++) {
    workList.innerHTML += `
      <div class="card">
        <h3>${displayWorks[i].title}</h3>
        <p><strong>作者：</strong>${displayWorks[i].author}</p>

        <h4>中国語本文</h4>
        <p>${displayWorks[i].chineseText}</p>

        <h4>ピンイン</h4>
        <p>${displayWorks[i].pinyin}</p>

        <h4>日本語訳</h4>
        <p>${displayWorks[i].japanese}</p>

        <h4>メモ</h4>
        <p>${displayWorks[i].memo}</p>

        <button onclick="editWork(${displayWorks[i].id})">修正</button>
        <button onclick="deleteWork(${displayWorks[i].id})">削除</button>
      </div>
    `;
  }
}

// 削除
async function deleteWork(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  await fetchWorks();
  showWorks(works);
}

// 修正ボタンを押したとき
function editWork(id) {
  let work = works.find(function(item) {
    return item.id === id;
  });

  if (!work) {
    alert("作品が見つかりません");
    return;
  }

  editingWorkId = id;

  document.getElementById("title").value = work.title;
  document.getElementById("author").value = work.author;
  document.getElementById("chineseText").value = work.chineseText;
  document.getElementById("pinyin").value = work.pinyin;
  document.getElementById("japanese").value = work.japanese;
  document.getElementById("memo").value = work.memo;

  showInputScreen();
}

// 検索
function searchWorks() {
  let keyword = document.getElementById("searchInput").value;

  let filteredWorks = works.filter(function(work) {
    return (
      (work.title || "").includes(keyword) ||
      (work.author || "").includes(keyword) ||
      (work.chineseText || "").includes(keyword) ||
      (work.pinyin || "").includes(keyword) ||
      (work.japanese || "").includes(keyword) ||
      (work.memo || "").includes(keyword)
    );
  });

  showWorks(filteredWorks);
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