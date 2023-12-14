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
//------------------------------------
// 更新購物車
function updateCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);

    if (quantity > 0) {
        // 商品數量大於 0，更新或新增購物車項目
        if (cartItem) {
            cartItem.quantity = parseInt(quantity);
            cartItem.total = cartItem.quantity * product.price; // 新增計算總金額
        } else {
            cart.push({ product, quantity: parseInt(quantity), total: product.price * parseInt(quantity) });
        }
    } else {
        // 商品數量為 0，移除購物車項目
        if (cartItem) {
            cart.splice(cart.indexOf(cartItem), 1);
        }
    }

    updateCartView();
}

// 更新購物車顯示
function updateCartView() {
    const emptyCart = document.getElementById('empty-cart');
    const checkoutInfo = document.querySelector('.checkout-info');
    const totalPrice = document.getElementById('total-price');

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        checkoutInfo.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        checkoutInfo.style.display = 'block';
        const total = cart.reduce((acc, item) => acc + item.total, 0);
        totalPrice.textContent = `總價: $${total.toFixed(2)}`;
    }
}

window.addEventListener("load", init, false);	