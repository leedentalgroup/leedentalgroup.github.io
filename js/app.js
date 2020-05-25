$(document).ready(function() {
  var yearElement = $('#current-year');
  var today = new Date();
  var year = today.getFullYear();
  yearElement.text(year);

  // $('#english-form-btn').click(function(e) {
  //   e.preventDefault();
  //   $(this).addClass('btn-active');
  //   $('#english-form-frame').show();
  //   $('#korean-form-btn').removeClass('btn-active');
  //   $('#korean-form-frame').hide();
  // });

  // $('#korean-form-btn').click(function(e) {
  //   e.preventDefault();
  //   $(this).addClass('btn-active');
  //   $('#korean-form-frame').show();
  //   $('#english-form-btn').removeClass('btn-active');
  //   $('#english-form-frame').hide();
  // });
});