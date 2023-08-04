let mainDiv = document.getElementById("main");
let loadingDiv = document.getElementById("loading");
let foundDiv = document.getElementById("foundNum");


let loadCount = 0;
let foundCount = 0;

function startSearch() {
    mainDiv.innerHTML = "";
    loadingDiv.style.width = "0%";
    console.log("starting");
    foundCount = 0;
    loadCount = 0;
    heavycomp(0);
    //LoadingBar();
}
