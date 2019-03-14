// li Click Listener
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// X Click Listener
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Input 'enter' keypress
$("input[type='text']").keypress(function(event) {
  if(event.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

// Toggle input fade
$("#toggle-form").click(function () {
  $("input[type='text']").fadeToggle();
});