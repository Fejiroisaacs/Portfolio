function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var time = h + ":" + m + ":" + s;
    $(".time").text(time);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}
$(document).ready(function() {

$(".change").click(function(){
    var outerColor =$("#outer-color").val() ;
    var innerColor =$("#inner-color").val() ;
    var textCOlor =$("#text-color").val();
    var fontsize =$("#fontsize").val();
    theme(outerColor, innerColor, textCOlor, fontsize);
});
});

function theme(outer, inner, text, font){
    $(".section").css("background-color", outer);
    $(".innersection").css("background-color", inner);
    $("p,h1").css("color",text);
    $("p").css("font-size", font + "px");
}
