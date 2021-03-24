/*--"scroll down animation" Bootstrap 4.1.1 Snippet by hasan143--
https://bootsnipp.com/snippets/0e6dy*/

/*-- Back to top btn --*/

let btn = $('#back-to-top');

$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

