console.log("js loaded");

$(".jump").on("click", function(e) {
  e.preventDefault();
  $("body, html").animate({ 
    scrollTop: $($(this).attr('href')).offset().top 
  }, 1000);
});

$('nav:after').hover(function(){
  $('nav').fadeOut(); 
});

$(window).scroll(function(){
  if($(document).scrollTop() > 100){
    $("nav").addClass("fade-nav");
  }

  else if ($(document).scrollTop() < 100){
    $("nav").removeClass("fade-nav");
  }   
});

$('.project-shader').mouseenter(function(){
  $(this).find(".learn-more").fadeIn(); 
});

$('.project-shader').mouseleave(function(){
  $(this).find(".learn-more").fadeOut(); 
});

//Subheading play-loop
subheadings = [ "Web Developer", 
                "Failed Cat Whisperer", 
                "Sushi-Obsessed", 
                "Code Refactorer", 
                "Indie Music Lover", 
                "Fusion Cook", 
                "Wine & Beer Enthusiast",
                "Sci-Fi Aficionado"];
count = 0;

function changeSubHeading() {
    $(".title-subheading").fadeIn().delay(2000).fadeOut(function() {
        changeSubHeading();
    }).text(subheadings[count++])
    if (count == subheadings.length) {
        count = 0;
    }
}

changeSubHeading();
//Reveal timeline on scroll
// var options = [
 
//   {selector: '#job-1', offset: 100, callback: function(element) {
//     Materialize.fadeInImage($(element));
//   } },
//   {selector: '#job-2', offset: 100, callback: function(element) {
//     Materialize.fadeInImage($(element));
//   } },
//   {selector: '#job-3', offset: 100, callback: function(element) {
//     Materialize.fadeInImage($(element));
//   } },
//   {selector: '#job-4', offset: 100, callback: function(element) {
//     Materialize.fadeInImage($(element));
//   } }

// ];
// Materialize.scrollFire(options);