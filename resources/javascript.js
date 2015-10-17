function replaceName() {
  var myNewName = window.prompt('Pick a new name!');
  document.getElementById('user-name').innerHTML = myNewName;
}
      
/* document.onclick = replaceName; */


$(document).ready(function() {
  /* Add code from the next steps here */
  $("#copyright").click(function(){
    $(this).css('color','purple'); 
});
});




