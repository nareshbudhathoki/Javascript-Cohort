function updateClock(){
  
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const now = new Date();

//approach one
// let time = now.toLocaleTimeString();
// let date = now.toLocaleDateString();
// dateElement.innerText = date;
// timeElement.innerText = time;



let hours = now.getHours()%12 || 12;
let hour = hours < 10 ? `0${hours}` : `${hours}`;
let minute = now.getMinutes().toString().padStart(2, "0");
//alternate approach: minute < 10 ? `0${minute}` :`${minute`}
let second = now.getSeconds().toString().padStart(2, "0");

const ampm = now.getHours() >= 12 ? "PM" : "AM";

timeElement.innerText = `${hour} : ${minute} : ${second} ${ampm}`

const options = {
  weekday: "long",
  year: "numeric",
  month:"long",
  day: "numeric"
}

let date = now.toLocaleDateString(undefined, options);
dateElement.innerText = date;

}

setInterval(() => {
  updateClock();
}, 1000);

updateClock();