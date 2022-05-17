function copyTexttoClipboard() {
  var text = document.getElementById("display");
  //text.select();
  navigator.clipboard.writeText(text.value);
  document.getElementById("copybtn").className += "transparencytext";
}
