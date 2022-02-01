// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

"use strict";

(function (Uleadz) {
    $(function () {
        $("#next").click(t => {
            $("#prev").addClass("disable");
            $("#next").addClass("disable");

            var $elem = $('.paginations .pagination').not('.disable').first();

            $elem.addClass("disable");
            $('.paginations').css("margin-left", "200px");

            $('.paginations').animate({
                marginLeft: 0
            }, 400, function () {
                handlePrevNextButtons();
            });
        });
        $("#prev").click(t => {
            $("#prev").addClass("disable");
            $("#next").addClass("disable");

            var $elem = $('.paginations .pagination.disable').last();
            $('.paginations').animate({
                marginLeft: '200px'
            }, 400, function () {
                $('.paginations').css("margin-left", "0");
                $elem.removeClass("disable");
                handlePrevNextButtons();

            });
        });

        function handlePrevNextButtons() {
            if ($('.paginations .pagination[data-index="first"]').hasClass("disable")) {
                $("#prev").removeClass("disable");
                $(".overlap-group4").css("justify-content", "");
            }

            if (!checkVisible($('.paginations .pagination[data-index="last"]')[0])) {
                $("#next").removeClass("disable");
                $(".overlap-group4").css("justify-content", "end");
            }
        }

        function checkVisible(elm) {
            var rect = elm.getBoundingClientRect();
            var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
            return rect.left + rect.width < viewWidth;
        }

        (function () {
            $(function () {
                $(`#myDIV [href='${Uleadz.pageNmae}']`).addClass("active")
            });
        })()
    });
})(Uleadz);
//var start = 0;
//var nb = 3;
//var end = start + nb;
//var length = $('.side .pagination').length;
//var list = $('.side .pagination');

//list.hide().filter(':lt(' + (end) + ')').show();


//$('.prev, .next').click(function (e) {
//    e.preventDefault();

//    if (($(this).hasClass('prev') && start > 0) || ($(this).hasClass('next') && end < length)) {

//        if ($(this).hasClass('prev')) {
//            start -= nb;
//        } else {
//            start += nb;
//        }

//        end = start + nb;

//    }

//    if (start == 0) list.hide().filter(':lt(' + (end) + ')').show();
//    else list.hide().filter(':lt(' + (end) + '):gt(' + (start - 1) + ')').show();
//});

//var s = 0;
//var n = 2;
//var stop = s + n;
//var leng = $('.side-2 .pagination').length;
//var lis = $('.side-2 .pagination');

//lis.hide().filter(':lt(' + (stop) + ')').show();


//$('.prev, .next').click(function (e) {
//    e.preventDefault();

//    if (($(this).hasClass('prev') && s > 0) || ($(this).hasClass('next') && stop < leng)) {

//        if ($(this).hasClass('prev')) {
//            s -= n;
//        } else {
//            s += n;
//        }

//        stop = s + n;

//    }

//    if (s == 0) lis.hide().filter(':lt(' + (stop) + ')').show();
//    else lis.hide().filter(':lt(' + (stop) + '):gt(' + (s - 1) + ')').show();
//});

//var s1 = 0;
//var n1 = 1;
//var stop1 = s1 + n1;
//var leng1 = $('.side-1 .pagination').length;
//var lis1 = $('.side-1 .pagination');

//lis1.hide().filter(':lt(' + (stop1) + ')').show();


//$('#fet .prev, #fet .next').click(function (e) {
//    e.preventDefault();

//    if (($(this).hasClass('prev') && s1 > 0) || ($(this).hasClass('next') && stop1 < leng1)) {

//        if ($(this).hasClass('prev')) {
//            s1 -= n1;
//        } else {
//            s1 += n1;
//        }

//        stop1 = s1 + n1;

//    }

//    if (s1 == 0) lis1.hide().filter(':lt(' + (stop1) + ')').show();
//    else lis1.hide().filter(':lt(' + (stop1) + '):gt(' + (s1 - 1) + ')').show();
//});
//var s11 = 0;
//var n11 = 1;
//var stop11 = s11 + n11;
//var leng11 = $('.side-11 .pagination').length;
//var lis11 = $('.side-11 .pagination');

//lis11.hide().filter(':lt(' + (stop11) + ')').show();


//$('.prev, .next').click(function (e) {
//    e.preventDefault();

//    if (($(this).hasClass('prev') && s11 > 0) || ($(this).hasClass('next') && stop11 < leng11)) {

//        if ($(this).hasClass('prev')) {
//            s11 -= n11;
//        } else {
//            s11 += n11;
//        }

//        stop11 = s11 + n11;

//    }

//    if (s11 == 0) lis11.hide().filter(':lt(' + (stop11) + ')').show();
//    else lis11.hide().filter(':lt(' + (stop11) + '):gt(' + (s11 - 11) + ')').show();
//});