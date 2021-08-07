$(document).ready(function(){
    $(this).scrollTop(0);
});
window.onbeforeunload = function () {
    $("body").css("display","hidden");
    window.scrollTo(0, 0);
}
$("body").css("overflow","hidden");

$(".telonA").animate({width:'0px'} , "slow" , function(){
    $(".telonB").delay(100).animate({   width:'0px'}, "fast", function(){
        $("body").css("overflow","visible");
    })
}).delay(2000)

let alto = (window.innerHeight);
let animateY = document.querySelectorAll(".animateY");
let animateX_der = document.querySelector(".animateX_der");
let animateX_izq = document.querySelector(".animateX_izq");
let animateX_derDos = document.querySelector(".animateX_der-dos");
let animateX_izqDos = document.querySelector(".animateX_izq-dos");
let animateX_derTres = document.querySelector(".animateX_der-tres");
let animateX_izqTres = document.querySelector(".animateX_izq-tres");
let animateX_derCuatro = document.querySelector(".animateX_der-cuatro");
let animateX_izqCuatro = document.querySelector(".animateX_izq-cuatro");
function showScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i=0; i < animateY.length; i++){
        let alturaAnimado = animateY[i].offsetTop;
        if (alturaAnimado - (alto - 50) < scrollTop) {
            animateY[i].style.opacity = 1;
            animateY[i].classList.add("moveUp")
        }
    }
}
window.addEventListener('scroll', showScroll);
window.onscroll = () => {
    let pos = window.scrollY - 900;
    animateX_der.style.left = `${pos}px`;
    animateX_izq.style.right = `${pos}px`;
    animateX_derDos.style.left = `${pos}px`;
    animateX_izqDos.style.right = `${pos}px`;
    animateX_derTres.style.left = `${pos}px`;
    animateX_izqTres.style.right = `${pos}px`;
    animateX_derCuatro.style.left = `${pos}px`;
    animateX_izqCuatro.style.right = `${pos}px`;
}

document.addEventListener('keydown', logkey);
let contador=1;
function logkey(e){
    if(e.keyCode == 40) {
        switch(contador){
            case 0:
                $("#foto1").css("bottom","-110%");
                $("#foto6").animate({bottom:'100%'},"slow");
                $("#foto1").animate({bottom:'10%'},"slow");

                contador=1;
            break;
            case 1:
                $("#foto2").css("bottom","-110%");
                $("#foto1").animate({bottom:'110%'},"slow");
                $("#foto2").animate({bottom:'10%'},"slow");

                contador=2;
            break;
            case 2:

                $("#foto3").css("bottom","-110%");
                $("#foto2").animate({bottom:'110%'},"slow");
                $("#foto3").animate({bottom:'10%'},"slow");

                contador=3;
            break;
            case 3:
                $("#foto4").css("bottom","-110%");
                $("#foto3").animate({bottom:'110%'},"slow");
                $("#foto4").animate({bottom:'10%'},"slow");
        
                contador=4;
            break;
            case 4:
                $("#foto5").css("bottom","-110%");
                $("#foto4").animate({bottom:'110%'},"slow");
                $("#foto5").animate({bottom:'10%'},"slow");

                contador=5;
            break;
            case 5:
                $("#foto6").css("bottom","-110%");
                $("#foto5").animate({bottom:'110%'},"slow");
                $("#foto6").animate({bottom:'10%'},"slow");

                contador=0;
            break;
        }
    }else if(e.keyCode == 38){
        switch(contador){
            case 1:
                $("#foto6").css("bottom","110%");
                $("#foto1").animate({bottom:'-110%'},"slow");
                $("#foto6").animate({bottom:'10%'},"slow");

                contador=0;
            break;
            case 2:
                $("#foto1").css("bottom","110%");
                $("#foto2").animate({bottom:'-110%'},"slow");
                $("#foto1").animate({bottom:'10%'},"slow");

                contador=1;
            break;
            case 3:
                $("#foto2").css("bottom","110%");
                $("#foto3").animate({bottom:'-110%'},"slow");
                $("#foto2").animate({bottom:'10%'},"slow");

                contador=2;
            break;
            case 4:
                $("#foto3").css("bottom","110%");
                $("#foto4").animate({bottom:'-110%'},"slow");
                $("#foto3").animate({bottom:'10%'},"slow");


                contador=3;
            break;
            case 5:
                $("#foto4").css("bottom","110%");
                $("#foto5").animate({bottom:'-110%'},"slow");
                $("#foto4").animate({bottom:'10%'},"slow");

                contador=4;
            break;
            case 0:
                $("#foto5").css("bottom","110%");
                $("#foto6").animate({bottom:'-110%'},"slow");
                $("#foto5").animate({bottom:'10%'},"slow");

                contador=5;
        }
    }
}