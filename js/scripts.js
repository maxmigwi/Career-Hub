// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("reflesh").classList.toggle("clear");


  $(document).ready(function(){
    $("form#show").submit(function(event) {
  
      event.preventDefault();
      var name = $.trim($('#name').val());
      var email = $.trim($('#email').val());
      if ((name === '') || (email === '')) {
        return false;
      } else {
        alert("We have received your message.Thank you for reaching out for us");
        $("#show")[0].reset();

$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").hide();
  });
  $(".btn2").click(function(){
    $("p").show();
  });
});
<p>This is a paragraph.</p>

<button class="btn1">Hide</button>
<button class="btn2">Show</button>
