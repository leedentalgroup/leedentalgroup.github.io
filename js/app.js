$(document).ready(function() {
  var yearElement = $('#current-year');
  var today = new Date();
  var year = today.getFullYear();
  yearElement.text(year);

  // var loadCounter = 0;
  // var loaded = function() {
  //   loadCounter += 1;
  //   if (loadCounter === 2) {
  //     var width = Math.floor(window.screen.width / 2.25);
  //     $("iframe").attr("width", width + "px");
  //   }
  // };


});