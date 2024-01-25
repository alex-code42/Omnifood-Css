console.log("hallo visitor 😀😎😀 ")

const h1 = document.querySelector(".heading-primary");
const myName = "alex R"




var year = document.querySelector(".year");

const d = new Date();
let thisyear = d.getFullYear();
year.textContent = thisyear;


var button = document.querySelector(".btn-mobile-nav");
var header = document.getElementById("header")
button.addEventListener("click", function(){
    header.classList.toggle("nav-open")
});


// function checkFlexGap() {

//     var flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";
  
//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));
  
//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);

//     if (!isSupported) document.body.classList.add("no-flexbox-gap")
  
//   }
//   checkFlexGap()