/*
//Callback függvény fade után.
function fadeDone() {
  console.log(this);
}

// Esemenykezelo beallitasa.
$("p").click(function(){
    $(this).hide();
    //$(this).fadeTo(5000, 1, fadeDone);
    $(this).slideDown(3500);
  });

// Esemeny kivalsztasa.
$("p").click();

// Kattintás megelőzése.
$("nav a.nav-link").click( function(ev) {
  ev.preventDefault();
  var link= $(this);
  $(document.body).animate({
    opacity: '0'
  }, 1000, function() {
      document.location = link.attr("href");
  })
});

*/

// Event oldal.
$(".events-search-row input").on("keyup", function(ev) {
  $.each( $(".events-card-deck .card .card-title"), function(i, e)   {
      var elem = $(e);
      var search = ev.target.value.toLowerCase();
      var content = elem.html().toLowerCase();
      if ( content.indexOf(search) == -1 ) {
        elem.parents(".card").hide();
      } else {
        elem.parents(".card").show();
      }
  });
});

// Register oldal.
$(".cherry-custom-file").on("change", function(ev) {
  var name = ev.target.value.split("\\").pop();
  $(this)
    .find(".file-name")
    .html(name);
});

// Ticket oldal.
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});



