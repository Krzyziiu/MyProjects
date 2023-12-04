// document.addEventListener('DOMContentLoaded', function () {
//     //2 lines below are for initial position of second section
//     const secondPic = document.querySelector("#jpg-drugi").style.transform = "translateX(200vw)";
//     const secondText = document.querySelector("#tekst-drugi").style.transform = "translateX(-200vw)";

//     const targetDownElement = document.querySelector('#sekcja-druga');
//     const snapDownPosition = targetDownElement.getBoundingClientRect().top + window.scrollY;

//     const targetDownElement2 = document.querySelector('#sekcja-trzecia');
//     const snapDownPosition2 = targetDownElement2.getBoundingClientRect().top + window.scrollY;
    
//     const targetUpElement = document.querySelector('#sekcja-pierwsza');
//     const snapUpPosition = targetUpElement.getBoundingClientRect().top + window.scrollY;
    
//     // Introduce a flag to track whether the function has already executed
//     let hasDownFunctionExecuted = false;  //flag for the first function
//     let hasUpFunctionExecuted = true;  //flag for the second function
//     let hasDownFunctionExecuted2 = false;  //flag for the third function


//     window.addEventListener('scroll', function () {
//         const scrollY = window.scrollY;
//         const scrollThreshold = 300;

//         if (!hasDownFunctionExecuted && Math.abs(scrollY - snapDownPosition) < scrollThreshold) {

//             DownFunctionToExecuteOnSnap();
            
//             // Set the flag to true to prevent further executions
//             hasDownFunctionExecuted = true;
//         } else if (hasDownFunctionExecuted && Math.abs(scrollY - snapDownPosition) >= scrollThreshold) {
//             // Reset the flag if the user scrolls away from the snap position
//             hasDownFunctionExecuted = false;
//         }
//     });

//     window.addEventListener('scroll', function () {
//         const scrollY = window.scrollY;
//         const scrollThreshold = 400;

//         if (!hasUpFunctionExecuted && Math.abs(scrollY - snapUpPosition) < scrollThreshold) {

//             UpFunctionToExecuteOnSnap();
            
//             // Set the flag to true to prevent further executions
//             hasUpFunctionExecuted = true;
//         } else if (hasUpFunctionExecuted && Math.abs(scrollY - snapUpPosition) >= scrollThreshold) {
//             // Reset the flag if the user scrolls away from the snap position
//             hasUpFunctionExecuted = false;
//         }
//     });


//     window.addEventListener('scroll', function () {                             //scroll down 2
//         const scrollY = window.scrollY;
//         const scrollThreshold = 300;

//         if (!hasDownFunctionExecuted2 && Math.abs(scrollY - snapDownPosition2) < scrollThreshold) {

//             DownFunctionToExecuteOnSnap2();
            
//             // Set the flag to true to prevent further executions
//             hasDownFunctionExecuted2 = true;
//         } else if (hasDownFunctionExecuted2 && Math.abs(scrollY - snapDownPosition2) >= scrollThreshold) {
//             // Reset the flag if the user scrolls away from the snap position
//             hasDownFunctionExecuted2 = false;
//         }
//     });

// });

// function DownFunctionToExecuteOnSnap() {

//     //section1 disappear
//     const firstPic = document.querySelector("#jpg-pierwszy")
//     const firstText = document.querySelector("#tekst-pierwszy")
//     firstPic.style.transform = "translateX(-200vw)";
//     firstPic.style.opacity = "0";
//     firstText.style.transform = "translateX(200vw)";
//     firstText.style.opacity = "0";

//     //section2 appear
//     const secondPic = document.querySelector("#jpg-drugi")
//     const secondText = document.querySelector("#tekst-drugi")
//     secondPic.style.transform = "translateX(0vw)";
//     secondText.style.transform = "translateX(0vw)";
//     secondPic.style.opacity = "0.8";
//     secondText.style.opacity = "1";


//     //arrow1 disappear
//     const strzalka = document.querySelector("#arrows-body-1");
//     strzalka.style.visibility = "hidden";

//     //arrow2 appear
//     const strzalkaDruga = document.querySelector("#arrows-body-2");
//     strzalkaDruga.style.visibility = "visible";
// }
// function UpFunctionToExecuteOnSnap() {
//     const firstPic = document.querySelector("#jpg-pierwszy")
//     const firstText = document.querySelector("#tekst-pierwszy")
//     firstPic.style.transform = "translateX(0vw)";
//     firstPic.style.opacity = "0.8";
//     firstText.style.transform = "translateX(0vw)";
//     firstText.style.opacity = "1";



//     const secondPic = document.querySelector("#jpg-drugi")
//     const secondText = document.querySelector("#tekst-drugi")
//     secondPic.style.transform = "translateX(200vw)";
//     secondPic.style.opacity = "0";
//     secondText.style.transform = "translateX(-200vw)";
//     secondText.style.opacity = "0";


//     const strzalka = document.querySelector("#arrows-body-1");
//     strzalka.style.visibility = "visible";

//     const strzalkaDruga = document.querySelector("#arrows-body-2");
//     strzalkaDruga.style.visibility = "hidden";
// }

// function DownFunctionToExecuteOnSnap2(){
//     const secondPic = document.querySelector("#jpg-drugi")
//     const secondText = document.querySelector("#tekst-drugi")
//     secondPic.style.transform = "translateX(200vw)";
//     secondPic.style.opacity = "0";
//     secondText.style.transform = "translateX(-200vw)";
//     secondText.style.opacity = "0";
// }





const scrolluj = () =>{
    scrollBy({
      top: window.innerHeight*0.92, //0.79 żeby strzałka była nadal widoczna
      left: 0,
      behavior: "smooth"
    })
  }
const scrolluj2 = () =>{
scrollBy({
    top: -window.innerHeight*0.92, //0.79 żeby strzałka była nadal widoczna
    left: 0,
    behavior: "smooth"
})
}
const goTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}

let popFlag = false; //check if popup is active
const pop = (object) =>{
    if(!popFlag){
        object.nextElementSibling.style.transform = "translate(-50%, -50%) scale(1)";
    }
    
    popFlag = true;
}

const closePop = (object) =>{
    object.parentElement.style.transform = "translate(-50%, -50%) scale(0)";
    popFlag = false;
}








// Galeria


// const popupPic = document.querySelector("#popupPic");
// const img = popupPic.querySelector("img");
// const p = popupPic.querySelector("p")

// popupPic.style.width = img.offsetWidth + 'px';
// popupPic.style.height = img.offsetHeight + 'px';

// // const popupPicChild = popupPic.firstChild;
// const klik = (zdjecie) =>{
// console.log(zdjecie);
// popupPic.style.transform = "translate(-50%, -50%) scale(1)";
// }