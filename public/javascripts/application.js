$(document).ready(function() {

  set_active_menu_item();

});

function set_active_menu_item() {
  var path = window.location.pathname.replace(/\//g, '');
  var selector = 'ul.nav > ';
  $('ul.nav > li').removeClass('active');

  switch (path) {
    case "ruby":
      selector += 'li#ruby';
      break;
    case "data_mining":
      selector += 'li#data_mining';
      break;
    case "android":
      selector += 'li#android';
      break;
    case "embedded_systems":
      selector += 'li#embedded';
      break;
    case "php":
      selector += 'li#php';
      break;
    case "contact":
      selector += 'li#contact';
      break;
    default:
      selector = false;
      break;
  }

  if (selector) {
    $(selector).addClass('active');
  }
}