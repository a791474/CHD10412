document.addEventListener("DOMContentLoaded", function() {
    var topBtn = document.getElementById("topBtn");

    //用JS寫滾動事件讓TOP鍵滾到網頁高度600時顯示於畫面右下方，點了之後回到頁面最上方，且回到高於600時消失。

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
// 用jQuery寫滾動事件讓nav滾到網頁高度600時消失，滾回600以上顯示。
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 100) {
            $('.top-header').fadeOut(300);
        } else {
            $('.top-header').fadeIn(300);
        }
    });
});