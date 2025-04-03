//your JS code here. If required.
function timeUpdate(){
 	let timer = document.getElementById("timer");
 	let currentDate = new Date();
 	timer.textContent = currentDate.toLocaleString();
 }
 timeUpdate();
 setInterval(timeUpdate, 1000);
