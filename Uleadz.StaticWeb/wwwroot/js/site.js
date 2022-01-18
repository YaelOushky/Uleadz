// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


(function () {
    $(function () {
        $(`#myDIV [href='${Uleadz.pageNmae}']`).addClass("active")
    });
})()

var start = 0;
var nb = 3;
var end = start + nb;
var length = $('.side .pagination').length;
var list = $('.side .pagination');

list.hide().filter(':lt(' + (end) + ')').show();


$('.prev, .next').click(function (e) {
    e.preventDefault();

    if (($(this).hasClass('prev') && start > 0) || ($(this).hasClass('next') && end < length)) {

        if ($(this).hasClass('prev')) {
            start -= nb;
        } else {
            start += nb;
        }

        end = start + nb;

    }

    if (start == 0) list.hide().filter(':lt(' + (end) + ')').show();
    else list.hide().filter(':lt(' + (end) + '):gt(' + (start - 1) + ')').show();
});

var s = 0;
var n = 2;
var stop = s + n;
var leng = $('.side-2 .pagination').length;
var lis = $('.side-2 .pagination');

lis.hide().filter(':lt(' + (stop) + ')').show();


$('.prev, .next').click(function (e) {
    e.preventDefault();

    if (($(this).hasClass('prev') && s > 0) || ($(this).hasClass('next') && stop < leng)) {

        if ($(this).hasClass('prev')) {
            s -= n;
        } else {
            s += n;
        }
        
        stop = s + n;

    }

    if (s == 0) lis.hide().filter(':lt(' + (stop) + ')').show();
    else lis.hide().filter(':lt(' + (stop) + '):gt(' + (s - 1) + ')').show();
});