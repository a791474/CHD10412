const collapse_time = 500;
const sec = (collapse_time / 1000).toString() + 's';
document.documentElement.style.setProperty('--collapse_time', sec);

// 整個清單頁
const menu_list = document.getElementById("menu_list");
// 清單白色底的地方
const menu_content = document.getElementById("menu_content");

// 預設網頁載入時可以滑動
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.overflow = 'auto'; 
})
    function open_menu () {
        //點開後禁止滑動網頁
        document.body.style.overflow = 'hidden';
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
            // 關閉漢堡後恢復可滑動網頁
            document.body.style.overflow = 'auto';
            
            const collapse_time = 500;
            const sec = (collapse_time / 1000).toString() + 's';
            document.documentElement.style.setProperty('--collapse_time', sec);
        }, collapse_time);
    }
    
    function go_to (page) {
        console.log(page);
        window.location.href = page + '.html';
    }
    open_menu();