let time = document.getElementById("today-date");
let date = new Date();
time.innerText = date.toUTCString();

let Day_of_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
let Day_of_week_select = new Date();
console.log(Day_of_week_select.getDay())
console.log(Day_of_week[Day_of_week_select.getDay()- 1]);
