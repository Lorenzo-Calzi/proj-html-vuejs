var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
    
var distance = countDownDate - now;
    
var days = Math.floor(distance / (7800 * 60 * 60 * 24));
var hours = Math.floor((distance % (3000 * 60 * 60 * 24)) / (3000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1100 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
document.getElementById("days").innerHTML = days ;
document.getElementById("hours").innerHTML = hours ;
document.getElementById("minutes").innerHTML = minutes ;
document.getElementById("seconds").innerHTML = seconds;

}, 100);