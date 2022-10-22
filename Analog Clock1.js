let clock = setInterval(clockTiming, 1000)

function clockTiming() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    document.getElementById("showClock").innerHTML = time ;
}