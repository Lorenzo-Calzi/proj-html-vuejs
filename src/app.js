const app = new Vue({
    el: "#app",

    data: {

        email: '',

        headerList: [
            { li: 'Courses'},
            { li: 'Curse Formats'},
            { li: 'Add Course'},
            { li: 'Pages'},
            { li: 'Demos'},
        ],

       /*  headerIcon: [
            { i: 'fab fa-linkedin'},
            { i: 'fab fa-instagram'},
            { i: 'fab fa-facebook'},
            { i: 'fab fa-twitter'},
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

        firstRowList: [
            { li: 'Blog'},
            { li: 'Courses'},
        ],

        secondRowList: [
            { li: 'Home'},
            { li: 'Membership A...'},
        ],

        ThirdRowList: [
            { li: 'Shortcodes'},
            { li: 'Typography'},
        ],


    },

    methods: {
        subscribe(){
            if(this.email.length > 3 && this.email.includes('@')){
                alert('🎉 Grazie per esserti iscritto alla NewsLetter 🎉')
                this.email = '';
            } else{
                alert('L\'email inserita è troppo corta o errata! Inseriscine una valida');
                this.email = '';
            }
        }
        
    },

     mounted(){

     }
})


/* CountDown FUnction */
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