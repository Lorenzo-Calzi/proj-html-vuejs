const app = new Vue({
    el: "#app",

    data: {

        headerList: [
            { li: 'Courses'},
            { li: 'Curse Formats'},
            { li: 'Add Course'},
            { li: 'Pages'},
            { li: 'Demos'},
        ],

        /* headerIcon: [
            { i: <i class="fab fa-linkedin"></i>},
            { i: <i class="fab fa-instagram"></i>},
            { i: <i class="fab fa-facebook"></i>},
            { i: <i class="fab fa-twitter"></i>},
        ], */

        footerAbout: [
            { p: 'Masterstudy is Education WordPress theme featured by learning'},
            { p: 'Management System (LMS) for online education.'},
            { p: 'Developed by StylemixThemes'},
        ],

        footerContact: [
            { p: 'USA, California 20, FIrst Avenue, California'},
            { p: 'Tel.: +1 212 458 300 32'},
            { p: 'Fax: +1 212 375 24 14'},
            { p: 'info@masterstudy.com'},
        ],

        footerList: [
            { li: 'Blog'},
            { li: 'Home'},
            { li: 'Shortcodes'},
            { li: 'Courses'},
            { li: 'Membership A...'},
            { li: 'Typography'}
        ],


    },

    methods: {

    },

     mounted(){

    }
})






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