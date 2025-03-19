$(document).ready(function(){
var linkMenu = document.querySelector('.nav-link');

linkMenu.addEventListener("click", linkActive);

function linkActive(){
    this.classList.add('active-link');
}

var btnCircle = document.querySelectorAll('.btn-circle');
var cardServ = document.querySelectorAll('.card_serv');
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

for (let i = 0; i < btnCircle.length; i++){
    btnCircle[i].addEventListener("click", btnClick);

    function btnClick(){
        for (let i = 0; i < btnCircle.length; i++){
            btnCircle[i].classList.remove('active-btn');
        }
        this.classList.add('active-btn');

        for (let i = 0; i < cardServ.length; i++){
            cardServ[i].classList.remove('show-card');

            if(this.classList.contains("btn1")){
                btn1.classList.add('show-card');
            }

            if(this.classList.contains("btn2")){
                btn2.classList.add('show-card');
            }

            if(this.classList.contains("btn3")){
                btn3.classList.add('show-card');
            }
        }
        
    }
}

var nav = document.querySelector('.navbar');

window.addEventListener('scroll', scrollNav);

function scrollNav(){
    const navImg = document.getElementById("logoNav");
    if(window.scrollY > 400){
        
        nav.classList.add('bg-dark');
        nav.classList.add('navbar-dark');
        navImg.src = "img/logo_hor_branco.png";
    } else if (window.scrollY < 400) {
        navImg.src = "img/logo_hor.png";
        nav.classList.remove('navbar-dark');
        nav.classList.remove('bg-dark');
        nav.classList.add('bg-light');
    }
}

const navImg = document.getElementById("logoNav");
if(window.scrollY > 400){
    
    nav.classList.add('bg-dark');
    nav.classList.add('navbar-dark');
    navImg.src = "img/logo_hor_branco.png";
} else if (window.scrollY < 400) {
    navImg.src = "img/logo_hor.png";
    nav.classList.remove('navbar-dark');
    nav.classList.remove('bg-dark');
    nav.classList.add('bg-light');
}


var btnTop = document.getElementById('btnTop');

btnTop.addEventListener('click', topBtn)

function topBtn(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

})