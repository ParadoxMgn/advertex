$(window).resize(function(event){
  adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header-menu');
  if (w<768) {
    if (!headerMenu.hasClass('done')) {
      headerMenu.addClass('done').appendTo($('.hidden-menu'));
    }
  } else {
    if (headerMenu.hasClass('done')) {
      headerMenu.removeClass('done').appendTo($('.header__main'));
    }
  }
}
export function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();