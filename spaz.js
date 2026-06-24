let temps = document.getElementById("temps");
let tempsreel = setInterval(horloge,1000);
function horloge(){
    let t = new Date();
    temps.innerHTML = t.toLocaleTimeString();
}