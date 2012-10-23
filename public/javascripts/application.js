$(document).ready(function() {

  set_active_menu_item();

});

function set_active_menu_item() {
  var path = window.location.pathname.replace(/\//g, '');
  var selector = 'ul.nav > ';
  $('ul.nav > li').removeClass('active');

  switch (path) {
    case "about":
      selector += 'li#about';
      break;
    case "ruby":
      selector += 'li#ruby';
      break;
    case "php":
      selector += 'li#php';
      break;
    case "embedded_systems":
      selector += 'li#embedded';
      break;
    default:
      selector = false;
      break;
  }

  if (selector) {
    $(selector).addClass('active');
  }
}