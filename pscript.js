const icon=document.querySelector(".fa-bars");
const icon2=document.querySelector(".fa-xmark");
const hode=document.querySelector(".hode");
const hode2=document.querySelector(".fa-bars");

icon.addEventListener("click", (evt)=>{
    evt.preventDefault;
    // hideicon();
     hode.classList.remove("hode");
     icon.classList.add("icon");
     
} );
// function hideicon(){   
//         icon.classList.add("icon");
// }
icon2.addEventListener("click", (evt)=>{
    evt.preventDefault;
    hode.classList.add("hode");
} );
//-----------------------------------------------------------------------
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const hide = document.querySelector(".hide");
const hide1 = document.querySelector(".hide1");
const hide2 = document.querySelector(".hide2");

first.addEventListener("click", (evt) => {
    evt.preventDefault;
    hide.classList.remove("hide");
    hide1.classList.add("hide1");
    hide2.classList.add("hide2");
    first.addEventListener("dblclick", () => {
    
        hide.classList.add("hide");
    });
    
});
second.addEventListener("click", (evt) => {
    evt.preventDefault;
    hide1.classList.remove("hide1");
    hide.classList.add("hide");
    hide2.classList.add("hide2");
    second.addEventListener("dblclick", () => {
        
        hide1.classList.add("hide1");
    });
    
});
third.addEventListener("click", (evt) => {
    evt.preventDefault;
    hide2.classList.remove("hide2");
    hide1.classList.add("hide1");
    hide.classList.add("hide");
    third.addEventListener("dblclick", () => {
        
        hide2.classList.add("hide2");
    });
    
});