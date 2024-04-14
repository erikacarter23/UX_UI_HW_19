$(document).ready(function(){
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    $(".card1-dropdown").click(function(){
    $(".card1b").slideDown("slow");
  });
  $(".card-dropdown").click(function(){
    $(".card1b").slideUp("slow");
  });
});