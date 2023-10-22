console.log("Your index.js file is loaded correctly!");
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });