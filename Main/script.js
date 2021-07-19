window.addEventListener("scroll" , function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); //Listen for the scroll event and apply a Sticky class to the header navbar after the document is currently scrolled vertically from the origin.
})

var counter1 = document.querySelector(".counter1");
let count = 1;
setInterval(() => {
    if(count < 85)
    {
        count++;
        counter1.innerText = count + "%";
    }
    
}, 80);

var counter2 = document.querySelector(".counter2");
let count1 = 1;
setInterval(() => {
    if(count1 < 80)
    {
        count1++;
        counter2.innerText = count1 + "%";
    }
    
}, 80);

var counter3 = document.querySelector(".counter3");
let count2 = 1;
setInterval(() => {
    if(count2 < 75)
    {
        count2++;
        counter3.innerText = count2 + "%";
    }
    
}, 80);

var counter4 = document.querySelector(".counter4");
let count3 = 1;
setInterval(() => {
    if(count3 < 90)
    {
        count3++;
        counter4.innerText = count3 + "%";
    }
    
}, 80);


var width = 1;
function getProgressBar(element, value){
    var identity = setInterval(scene, 300);
    
    function scene() {
      if (width >= value) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
}

var element = document.getElementById("html");
getProgressBar(element,85);

var element = document.getElementById("css");
getProgressBar(element,80);

var element = document.getElementById("js");
getProgressBar(element,75);

var element = document.getElementById("java");
getProgressBar(element,90);


const skillsTitle = document.getElementById("skills-title");
var skillsUpdation = (element) => {
element.addEventListener("mouseenter" , () =>
{
    var counter1 = document.querySelector(".counter1");
let count = 1;
setInterval(() => {
    if(count < 85)
    {
        count++;
        counter1.innerText = count + "%";
    }
    
}, 80);

var counter2 = document.querySelector(".counter2");
let count1 = 1;
setInterval(() => {
    if(count1 < 80)
    {
        count1++;
        counter2.innerText = count1 + "%";
    }
    
}, 80);

var counter3 = document.querySelector(".counter3");
let count2 = 1;
setInterval(() => {
    if(count2 < 75)
    {
        count2++;
        counter3.innerText = count2 + "%";
    }
    
}, 80);

var counter4 = document.querySelector(".counter4");
let count3 = 1;
setInterval(() => {
    if(count3 < 90)
    {
        count3++;
        counter4.innerText = count3 + "%";
    }
    
}, 80);


var width = 1;
function getProgressBar(element, value){
    var identity = setInterval(scene, 300);
    
    function scene() {
      if (width >= value) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
}

var element = document.getElementById("html");
getProgressBar(element,85);

var element = document.getElementById("css");
getProgressBar(element,80);

var element = document.getElementById("js");
getProgressBar(element,75);

var element = document.getElementById("java");
getProgressBar(element,90);
})
}

skillsUpdation(skillsTitle);









// var identity = setInterval(scene, 80);
    
//   function scene() {
//     if (width >= 91) {
//       clearInterval(identity);
//     } else {
//       width++; 
//       element.style.width = width + '%'; 
//     }
//   }

// var element = document.getElementById("html");
// var width = 1;
// var identity = setInterval(scene, 80);
    
//   function scene() {
//     if (width >= 91) {
//       clearInterval(identity);
//     } else {
//       width++; 
//       element.style.width = width + '%'; 
//     }
//   }
