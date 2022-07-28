
function cpy() {
  /* Get the text field */
var text = document.getElementById("text");

  if (text.value == ""){
    var x = document.getElementById("error");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }else{
  /* Select the text field */
  var copyText = document.getElementById("text");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value.toUpperCase()); 

  
  /* Alert the copied text */
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 /* alert("Copied the text: " + copyText.value.toUpperCase());*/
}
}