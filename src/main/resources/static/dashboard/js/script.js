var btns = document.getElementsByClassName("tab");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tabactive");
    current[0].className = current[0].className.replace(" tabactive", "");
    this.className += " tabactive";
  });
  btns[i].addEventListener("click", function() {
    var current1 = document.getElementsByClassName("menutittleactive");
    current1[0].className = current1[0].className.replace(" menutittleactive", "");
    this.children[0].className += " menutittleactive";
  });

}