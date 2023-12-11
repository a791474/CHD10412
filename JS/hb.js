let collapse_time = 500;
let sec = (collapse_time / 1000).toString() + 's';
document.documentElement.style.setProperty('--collapse_time', sec);

// 整個清單頁
let menu_list = document.getElementById("menu_list");
// 清單白色底的地方
let menu_content = document.getElementById("menu_content");

function open_menu () {
    if(menu_list == null) return;
    menu_list.classList.toggle("show");
    menu_list.classList.toggle("hidden");
    setTimeout(() => {
        menu_content.classList.toggle("switch_out");
        menu_content.classList.toggle("switch_in");
    }, 100);
}
function close_menu () {
    menu_content.classList.toggle("switch_out");
    menu_content.classList.toggle("switch_in");
    setTimeout(() => {
        menu_list.classList.toggle("show");
        menu_list.classList.toggle("hidden");
    }, collapse_time);
}

function go_to (page) {
    console.log(page);
    window.location.href = page + '.html';
}
open_menu();