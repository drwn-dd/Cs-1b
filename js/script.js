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
}

function saveExam() {
  let title = document.getElementById("examTitle").value;

  let data = JSON.parse(localStorage.getItem("exams") || "[]");
  data.push({ title });

  localStorage.setItem("exams", JSON.stringify(data));
  alert("Exam saved!");
}

function updateDashboard() {
  let q = JSON.parse(localStorage.getItem("quizzes") || "[]");
  let l = JSON.parse(localStorage.getItem("labs") || "[]");
  let e = JSON.parse(localStorage.getItem("exams") || "[]");

  if (document.getElementById("quizCount"))
    document.getElementById("quizCount").innerText = q.length;

  if (document.getElementById("labCount"))
    document.getElementById("labCount").innerText = l.length;

  if (document.getElementById("examCount"))
    document.getElementById("examCount").innerText = e.length;
}
