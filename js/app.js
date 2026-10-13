$(document).ready(function() {
  // Footer copyright year
  var today = new Date();
  $('#current-year').text(today.getFullYear());

  // Highlight today's row in the hours table and mirror it in the hero strip
  var day = today.getDay(); // 0 = Sunday ... 6 = Saturday
  var $row = $('.hours tr[data-day="' + day + '"]');
  if ($row.length) {
    $row.addClass('is-today');
    var isClosed = $row.hasClass('closed');
    var hours = $.trim($row.find('td').last().text());
    $('#today-hours')
      .text(isClosed ? 'Closed today' : hours)
      .toggleClass('is-closed', isClosed);
  }

  // Collapse the mobile menu after tapping a quick-strip link
  $('.hero-strip a.page-scroll').on('click', function() {
    $('.navbar-collapse.in').collapse('hide');
  });
});
