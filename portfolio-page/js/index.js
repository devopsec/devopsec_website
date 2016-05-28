/* disable non-usable buttons */
$("#brand").click(function(e) {
  e.preventDefault();
});

$("#thumb-2").click(function(e) {
  e.preventDefault();
});

$("#btn-phone").click(function(e) {
  e.preventDefault();
});

/* non-stick buttons :) */
$(".btn-default").mouseup(function(){
    $(this).blur();
})

/* carousel js function */
$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
$('#btn-phone').popover(); 

 $(".left").click(function(){
  $("#home-carousel-1").carousel("prev");
    });
$(".right").click(function(){
  $("#home-carousel-1").carousel("next");
    });
$("#home-carousel-1").carousel({interval: 2000, wrap: true});
$("#home-carousel-1").carousel();
$("#portfolio-carousel-1").carousel({interval: 1500, wrap: true});
$("#portfolio-carousel-1").carousel();
});

