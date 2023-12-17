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

// 在 cart.html 中的 JavaScript 部分
document.addEventListener('DOMContentLoaded', function () {
    // 讀取 localStorage 中的購物車資訊
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 在頁面中顯示購物車中的商品
    const cartContainer = document.getElementById('cartContainer');

    function displayCart() {
        cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.title}</p>
            <p>${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}
// 處理刪除商品的函式
window.removeFromCart = function (index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};

displayCart();
});
