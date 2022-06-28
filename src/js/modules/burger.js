export function isBurger() {
  $(document).ready(function () {
    $('.burger').click(function (event) {
      $('.hidden-menu').toggleClass('active');
      $('.burger').toggleClass('active');
      $('body').toggleClass('lock');
    });
    $('.header-menu__link').click(function (event) {
      $('body').removeClass('lock');
      $('.hidden-menu').removeClass('active');
      $('.burger').removeClass('active');
    });
  });
}