let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
var slider = document.getElementsByClassName("slider");

var imageNo = 0;

btnNext.addEventListener("click", ()=>{
    if(imageNo<4){
        imageNo+=1;
    }else{
        imageNo = 0;
    }
    slider[0].style.transform="translateX(" + (imageNo)*(-14) + "%)";
})
btnPrev.addEventListener("click", ()=>{
    if(imageNo<1){
        imageNo=4;
    }else{
        imageNo -= 1;
    }
    slider[0].style.transform="translateX(" + (imageNo)*(-14) + "%)";
})