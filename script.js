function moveRanndomEl(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random()*90+5)+ "%";
    elm.style.left = Math.floor(Math.random()*90+5)+ "%";
}

const moveRanndom = document.querySelector("#move-random");

moveRanndom.addEventListener("mouseenter", function(e){
    moveRanndomEl(e.target);

});