function startTime() {
  const today = new Date();
  console.log(today);
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

$(document).ready(function () {
  $(".change").click(function () {
    var outerColor = $("#outer-color").val();
    var textCOlor = $("#text-color").val();
    var fontsize = $("#fontsize").val();
    var hoverColor = $("#hover-color").val();
    theme(outerColor, textCOlor, fontsize, hoverColor);
  });
});

function theme(outer, text, font, hover) {
  $(".section").css("background-color", outer);
  $("p").css("color", text);
  $("p").css("font-size", font + "px");
  $("p").hover(function () {
    $("p").css("color", hover);
  }, function () {
    $("p").css("color", text);
  });
}
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})
//w3schools code here
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openMobileNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeMobileNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  //end of w3schools code