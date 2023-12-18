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

    const cartItem = document.createElement('div');
    cartItem.classList.add("cart-prod")
        cartItem.innerHTML = `
        <div class="cart-item">
            <div class="item-pic">
                <a href="product info.html">
                    <img src="imgs/all shops - prod1.png" alt="購物車商品照">
                </a>
            </div>
            <div class="cart-detail">
                <div class="detail-text">
                    <a href="product info.html">
                        <h2>${item.title}</h2>
                        <span>${item.price}</span>
                    </a>
                </div>
                <div class="cart-btn">
                    <input type="button" value="-" class="btnMinus">
                    <input type="text" value="0" class="qty">
                    <input type="button" value="+" class="btnPlus">
                    <i class="fa-regular fa-trash-can btn-delete"></i>
                </div>
            </div>
        </div>
        `;
    function displayCart() {
        cartContainer.innerHTML = '';

    cart.forEach(item => {
        // const cartItem = document.createElement('div');
        // const cartItem.classList.add
        // cartItem.innerHTML = `
        //     <p>${item.title}</p>
        //     <p>${item.price}</p>
            
        // `;
        cartContainer.appendChild(productContainer);
    });
}
// 處理刪除商品的函式
// window.removeFromCart = function (index) {
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCart();
// };
{/* <button onclick="removeFromCart(${index})">Remove</button> */}
// displayCart();
});
