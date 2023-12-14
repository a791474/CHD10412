function showLarge(e){//去指定事件物件發生的單位
	let smallImgs = e.target;
	document.getElementById('large').src = smallImgs.src;
	
}

function init(){//將小圖們命一個class name
	let smallImgs = document.querySelectorAll('.prod-pic-small img');

	for(let i=0; i<smallImgs.length; i++) {
		smallImgs[i].onclick = showLarge;
	}

}

window.addEventListener("load", init, false);