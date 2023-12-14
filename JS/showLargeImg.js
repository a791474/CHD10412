function showLarge(e){//去指定事件物件發生的單位
	let smallImgs = e.target;
	let largeImg = document.getElementById('large');
	// document.getElementById('large').src = smallImgs.src;

	largeImg.classList.add('fade-out');

	setTimeout(() => {
        largeImg.src = smallImgs.src;
        // 移除淡出效果，並添加淡入效果
        largeImg.classList.remove('fade-out');
        largeImg.classList.add('fade-in');
    }, 200); // 淡出時間與 CSS transition 時間一致
}

function init(){//將小圖們命一個class name
	let smallImgs = document.querySelectorAll('.prod-pic-small img');

	for(let i=0; i<smallImgs.length; i++) {
		smallImgs[i].onclick = showLarge;
	}

}

window.addEventListener("load", init, false);