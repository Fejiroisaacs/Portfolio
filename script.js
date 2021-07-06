function startTime() {
    
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var time = h + ":" + m + ":" + s;
    document.getElementById("time").innerHTML = time;
    setTimeout(startTime, 1000);
    console.log(time);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}