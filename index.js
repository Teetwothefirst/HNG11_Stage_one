let time = document.getElementById("today-date");
let date = new Date();
time.innerText = date.toUTCString();

let Day_of_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
let Day_of_week_select = new Date();
console.log(Day_of_week_select.getDay())
console.log(Day_of_week[Day_of_week_select.getDay()- 1]);


// function toUTC(){
//     const useWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     const newDate = document.getElementById('getDOW')
//     let d = new Date();
//     newDate.innerHTML  = useWeek[d.getDay()];

//     const UTCTime = document.getElementById('getTimeUTC');
//     let u = new Date();
//     UTCTime.innerHTML = u.toUTCString();

// }
// toUTC();
