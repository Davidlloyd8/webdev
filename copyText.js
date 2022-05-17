//Copy text to clipboard
function copyTexttoClipboard() {
  var text = document.getElementById("display");
  navigator.clipboard.writeText(text.value);
  document.getElementById("copybtn").className += "transparencytext";
}

//show collapse content


  var coll = document.getElementsByClassName("collapse-btn");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

