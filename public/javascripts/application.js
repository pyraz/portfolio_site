$(document).ready(function() {
  set_active_menu_item();
});

function set_active_menu_item() {
  var path = window.location.pathname.replace(/\//g, '');
  var selector = 'ul.nav > ';
  var data_mining = new RegExp(/data_mining/);
  $('ul.nav > li').removeClass('active');

  switch (path) {
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

  if (path.match(/data_mining/)) {
    selector = 'ul.nav > li#data_mining';
  }
  if (path.match(/ruby/)) {
    selector = 'ul.nav > li#ruby';
  }

  if (selector) {
    $(selector).addClass('active');
  }
}