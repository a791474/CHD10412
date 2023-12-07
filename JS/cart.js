// function $(id){
//     let obj = document.getElementById(id);

//     obj.text = function (text){
//         obj.innerText = text;
//         return obj;
//     }

//     obj.html = function (html){
//         obj.innerHTML = html;
//         return obj;
//     }

//     obj.css = function(css, value){
//         obj.style[css] = value; 
//         return obj;
//     }

//     return obj;
// }
//↓用id讓單一商品增加減少數量↓
// function $id(id) {
//     return document.getElementById(id);
// }

// function init(){
// 	//--------------------------------------減
// 	$id("btnMinus0").onclick = function(e) {
// 		let qtyObj = e.target.nextElementSibling;
// 		let qty = parseInt(qtyObj.value);
// 		if(qty>0) {
// 			qtyObj.value = qty - 1;
// 		}
// 	}
// 	//--------------------------------------加
// 	$id("btnPlus0").onclick = function(e) {
// 		let qtyObj = e.target.previousElementSibling;
// 		let qty = parseInt(qtyObj.value);
// 			qtyObj.value = qty + 1;
// 		}
// 	}
// window.addEventListener("load", init, false);
//↓用class name讓多個商品新增減少數量↓
function init(){
	let btnMinus = document.getElementsByClassName("btnMinus");
	let btnPlus = document.getElementsByClassName("btnPlus");
	// let btnMinus = document.querySelectorAll(".btnMinus"); 要用CSS的選取器去選

	for(let i=0; i<btnMinus.length; i++) {
		btnMinus[i].onclick = function(e){
			let qtyObj = e.target.nextElementSibling;
			let qty = parseInt(qtyObj.value);
			if(qty>0) {
				qtyObj.value = qty -1
			}
		}
		btnPlus[i].onclick = function(e){
			let qtyObj = e.target.previousElementSibling;
			let qty = parseInt(qtyObj.value);
				qtyObj.value = qty +1;
			}
	}
}	
window.addEventListener("load", init, false);	