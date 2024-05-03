let radio1 = document.getElementById("btn-one")
let radio2 = document.getElementById("btn-two")
let radio3 = document.getElementById("btn-three")

let sliderContainer = document.getElementById("offer-slider");
let radioBtns= [radio1, radio2, radio3];
let count= 1;

// setInterval(()=>{
//     if(count>2){
//         count=0;
//     }
//     // (`radio${count}`).click();
//     radioBtns[count].click();
//     count++;
// },3000)

radio1.addEventListener("click", ()=>{

    sliderContainer.style.transform = "translateX(33.32%)"
    radio1.style.backgroundColor = "green";
    radio2.style.backgroundColor = "rgba(26, 126, 17, 0.5)";
    radio3.style.backgroundColor = "rgba(26, 126, 17, 0.5)";
})
radio2.addEventListener("click", ()=>{
    sliderContainer.style.transform = "translateX("+(0)+"%)"
    radio2.style.backgroundColor = "green";
    radio1.style.backgroundColor = "rgba(26, 126, 17, 0.5)";
    radio3.style.backgroundColor = "rgba(26, 126, 17, 0.5)";
})
radio3.addEventListener("click", ()=>{
    sliderContainer.style.transform = "translateX(-33.32%)"
    radio3.style.backgroundColor = "green";
    radio1.style.backgroundColor = "rgba(26, 126, 17, 0.5)";
    radio2.style.backgroundColor = "rgba(26, 126, 17, 0.5)";
})



// // ----------------section-5---------------


// let radio1of5 = document.getElementById("btn1");
// let radio2of5 = document.getElementById("btn2");
// let radio3of5 = document.getElementById("btn3");



// let btn_1 = document.getElementById("cntrl-btn1");
// let btn_2 = document.getElementById("cntrl-btn2");
// let sliderContainerOf5 = document.getElementById("motivation-slider");



// radio1of5.addEventListener("click", ()=>{
//     sliderContainerOf5.style.transform = "translateX(33.32%)"
//     radio1of5.style.backgroundColor = "white";
//     radio2of5.style.backgroundColor = "rgba(100, 84, 84, 0.5)";
//     radio3of5.style.backgroundColor = "rgba(100, 84, 84, 0.5)";
// })
// radio2of5.addEventListener("click", ()=>{
//     sliderContainerOf5.style.transform = "translateX("+(0)+"%)"
//     radio2of5.style.backgroundColor = "white";
//     radio1of5.style.backgroundColor = "rgba(100, 84, 84, 0.5)";
//     radio3of5.style.backgroundColor = "rgba(100, 84, 84, 0.5)";
// })
// radio3of5.addEventListener("click", ()=>{
//     sliderContainerOf5.style.transform = "translateX(-33.32%)"
//     radio3of5.style.backgroundColor = "white";
//     radio1of5.style.backgroundColor = "rgba(100, 84, 84, 0.5)";
//     radio2of5.style.backgroundColor = "rgba(100, 84, 84, 0.5)";
// })

// ---------control-btns--------------

// // -------AUTO-Carousel------
// setInterval(()=>{
//     // btn_2.click();
// },1000)

// let radioBtns2= [radio1of5, radio2of5, radio3of5];

// let perct = ["33.32%", "0%" , "-33.32%"];
// let perct2 = ["0%", "33.32%" , "-33.32%"];
// let counter=0;
// let i =0;
// btn_1.addEventListener("click", ()=>{
//     if(i<0){
//         i=2
//     }
//     sliderContainerOf5.style.transform = "translateX("+perct2[i%3]+")"
//     for(var j=0;j<=2;j++){
//         if(j!=i%3){
//             radioBtns2[j].style.backgroundColor = "rgba(100, 84, 84, 0.5)";
//         }else{
//             radioBtns2[j].style.backgroundColor = "white";
//         }
//     }
//     i--;
// })
// i=0;
// btn_2.addEventListener("click", ()=>{
//     sliderContainerOf5.style.transform = "translateX("+perct[i%3]+")"
//     // console.log(i)
//     for(var j=0;j<=2;j++){
//         if(j!=i%3){
//             radioBtns2[j].style.backgroundColor = "rgba(100, 84, 84, 0.5)";
//         }else{
//             radioBtns2[j].style.backgroundColor = "white";
//         }
//     }
//     i++;
// })