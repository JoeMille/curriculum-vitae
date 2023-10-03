$(document).ready(function() {
    $('.clickable').click(function() {
      $(this).next('.content').slideToggle();
    });
  });