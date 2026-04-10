function saveQuiz() {
  let title = document.getElementById("quizTitle").value;

  let data = JSON.parse(localStorage.getItem("quizzes") || "[]");
  data.push({ title });

  localStorage.setItem("quizzes", JSON.stringify(data));

  alert("Quiz saved!");
}

function saveLab() {
  let title = document.getElementById("labTitle").value;

  let data = JSON.parse(localStorage.getItem("labs") || "[]");
  data.push({ title });

  localStorage.setItem("labs", JSON.stringify(data));

  alert("Lab saved!");
  displayLabs();
}

function saveExam() {
  let title = document.getElementById("examTitle").value;

  let data = JSON.parse(localStorage.getItem("exams") || "[]");
  data.push({ title });

  localStorage.setItem("exams", JSON.stringify(data));

  alert("Exam saved!");
}

function updateDashboard() {
  let quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
  let labs = JSON.parse(localStorage.getItem("labs") || "[]");
  let exams = JSON.parse(localStorage.getItem("exams") || "[]");

  let q = document.getElementById("quizCount");
  let l = document.getElementById("labCount");
  let e = document.getElementById("examCount");

  if (q) q.innerText = quizzes.length;
  if (l) l.innerText = labs.length;
  if (e) e.innerText = exams.length;
}

function displayLabs() {
  let labs = JSON.parse(localStorage.getItem("labs") || "[]");
  let list = document.getElementById("labList");

  if (!list) return;

  list.innerHTML = "";

  labs.forEach((lab, i) => {
    let li = document.createElement("li");
    li.innerText = (i + 1) + ". " + lab.title;
    list.appendChild(li);
  });
}

window.onload = function () {
  updateDashboard();
  displayLabs();
};
