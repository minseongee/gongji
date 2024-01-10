function generateTimetable(day, teachers, classes) {
  return `
      <tr>
          <th>1교시</th>
          <th>2교시</th>
          <th>3교시</th>
          <th>4교시</th>
          <th>5교시</th>
          <th>6교시</th>
          ${classes === 7 ? "<th>7교시</th>" : ""}
      </tr>
      <tr>
          ${day.map(subject => `<td>${subject}</td>`).join('')}
      </tr>
      <tr>
      ${teachers.map(teacher => `<td>${teacher}</td>`).join('')}
      </tr>  
  `;
}

function updateTimetable(seld) {
  const dateSelector = document.getElementById("dateSelector");
  const sd = dateSelector.value;
  const timetableTable = document.getElementById("timetableTable");
  timetableTable.innerHTML = ""
  seld=sd;
  switch (seld) {
      case "monday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"],7); /* 과목 & 선생님 성함 */
          break;
      case "tuesday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
      case "wednesday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
      case "thursday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
      case "friday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
  }
}

function initTimetable(seld) {
  const currentDate = new Date();
  const daysOfWeek = ["monday", "monday", "tuesday", "wednesday", "thursday", "friday", "monday"];
  const currentDay = daysOfWeek[currentDate.getDay()];
  document.getElementById('dateSelector').value = daysOfWeek[currentDate.getDay()];
  seld = currentDay;
  const timetableTable = document.getElementById("timetableTable");
  timetableTable.innerHTML = "";
  switch (seld) {
      case "monday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"],7);
          break;
      case "tuesday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
      case "wednesday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
      case "thursday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
      case "friday":
          timetableTable.innerHTML = generateTimetable(["-", "-", "-", "-", "-", "-", "-"],["-", "-", "-", "-", "-", "-", "-"], 7);
          break;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  dday();
  meal();
  const currentDate = new Date();
  const daysOfWeek = ["monday", "monday", "tuesday", "wednesday", "thursday", "friday", "monday"];
  const currentDay = daysOfWeek[currentDate.getDay()];
  document.getElementById('dateSelector').value = daysOfWeek[currentDate.getDay()];
  initTimetable(currentDay);
});

function dday() {
  var x = setInterval(function() {
  const dday = new Date("2024-03-04 00:00:00");
  const now = new Date();
  const gap = dday.getTime() - now.getTime();
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((gap % (1000 * 60)) / 1000);
  document.getElementById("dday").innerHTML =day + "일 " + hour + "시간 " + minute + "분 " + second + "초";
  }, 1000);
}