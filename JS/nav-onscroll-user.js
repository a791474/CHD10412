document.addEventListener("DOMContentLoaded", function() {
    var topBtn = document.getElementById("topBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };
    topBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 5) {
            $('.top-header').fadeOut(300);
        } else {
            $('.top-header').fadeIn(300);
        }
    });
});