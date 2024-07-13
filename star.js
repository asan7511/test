var punkteElement = document.querySelector("#punkte");
var resetElement = document.querySelector("#reset");
var starElement = document.querySelector("#starimg");
var sterne = 0;
if (!(localStorage.punkte == null)){
    sterne = parseInt(localStorage.getItem("punkte"));
}

punkteElement.innerHTML = sterne;

function starclick(){
    sterne = sterne + 1
    punkteElement.innerHTML = sterne;
    localStorage.setItem("punkte", sterne.toString());
     
    

}

function resetclick(){
    console.log("hallo welt")
    //sterne = 0
    //punkteElement.innerHTML = sterne;
    //localStorage.setItem("punkte", sterne.toString());

}

resetElement.addEventListener("click", resetclick)
starElement.addEventListener("click", starclick)
