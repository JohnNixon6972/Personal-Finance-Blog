$(document).ready(function() {
    // Fade in main content when page loads
    $("main").hide().fadeIn(1000);
  
    // Slide down sub-sections when section headings are clicked
    $("section h2").click(function() {
      $(this).next().slideToggle();
    });
  });
  