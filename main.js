$(document).ready(function () {
   /* Function to open nav-bar close when burger menu is pressed */
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
/* Function to make nav-bar close when link is pressed, took me bloody ages to realise this was missing by the way. 
Re-did my whole website, only to find out that I was missing this function. After that I changed everything back. */
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });     
});