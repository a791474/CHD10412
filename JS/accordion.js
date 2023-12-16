$(document).ready(function () {
    $(".at-title").click(function () {
        $(this).toggleClass("active").next(".at-tab").slideToggle().parent().siblings().find(".at-tab").slideUp().prev().removeClass("active");
        });
    });

// document.addEventListener('DOMContentLoaded', function () {
//     let accordionItems = document.querySelectorAll('.accordion-item');

//     accordionItems.forEach(function (item) {
//         item.addEventListener('click', function () {
//             // 切換內容的可見性
//             let content = this.nextElementSibling;
//             content.classList.toggle('show');

//             // 關閉其他已經展開的內容
//             accordionItems.forEach(function (otherItem) {
//                 if (otherItem !== item) {
//                     otherItem.nextElementSibling.classList.remove('show');
//                 }
//             });
//         });
//     });
// });
