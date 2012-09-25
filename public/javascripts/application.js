$(document).ready(function() {

  set_active_menu_item();

});

function set_active_menu_item() {
  var path = window.location.pathname.replace(/\//g, '');
  var selector = 'ul.nav > ';
  $('ul.nav > li').removeClass('active');

  switch (path) {
    case "":
      selector += 'li.home';
      break;
    case "about":
      selector += 'li.about';
      break;
  }

  $(selector).addClass('active');
}
