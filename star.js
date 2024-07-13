var punkteElement = document.querySelector("#punkte");
var sterne = 0;
punkteElement.innerHTML = "0";
var starElement = document.querySelector("#starimg");
function starclick(){
    console.log(sterne)
    sterne =+ 1
}
starElement.addEventListener("click", starclick())
