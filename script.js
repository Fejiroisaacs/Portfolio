function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    var time = h + ":" + m + ":" + s;
    $(".time").text(time);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // adds zero in front of numbers less than 10
    return i;
}

$(document).ready(function() {
$(".change").click(function(){
    var outerColor =$("#outer-color").val() ;
    var textCOlor =$("#text-color").val();
    var fontsize =$("#fontsize").val();
    var hoverColor=$("#hover-color").val();
    theme(outerColor, textCOlor, fontsize, hoverColor);
});
});

function theme(outer, text, font, hover){
    $(".section").css("background-color", outer);
    $("p,h1").css("color",text);
    $("p").css("font-size", font + "px");
    $("p").hover(function(){
        $("p").css("color", hover);
        }, function(){
        $("p").css("color", text);
      });      
}
window.addEventListener('scroll', function () {
            let header = document.querySelector('header');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
        })