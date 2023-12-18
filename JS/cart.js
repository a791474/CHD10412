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
//------------------------------------
const productData = {
    title: "日式巨峰窯花瓶",
    price: "3990",
    description:
        "源自日本的巨峰窯花瓶，以其精湛的陶藝工藝與自然的靈感而聞名。每一個花瓶都是匠人用心雕琢的藝術品，展現出獨特的日式美學。瓶身造型優雅，仿如巍峨的山峰，激發著對大自然的敬畏之情。精緻的釉面呈現柔和的色澤，讓花卉在其中綻放出自然、純粹的美。每一次插花都如同在日本秋日的山川間漫遊，感受四季的變幻。"
};

function createProductInfoBlock(data) {
    const container = document.createElement("div");
    container.classList.add("information");

    container.innerHTML = `
        <h1>${data.title}</h1>
        <p>建議售價</p>
        <span>NT$${data.price}</span>
        <div class="join">
            <input type="button" value="-" class="btnMinus">
            <input type="text" value="0" class="qty">
            <input type="button" value="+" class="btnPlus">
        </div>
        <button type="submit" class="join-cart" onclick="addToCart('${data.title}', ${data.price})">加入購物車</button>
        <p class="info">${data.description}</p>
    `;

    return container;
}

document.addEventListener("DOMContentLoaded", function () {
    const prodinfoContainer = document.querySelector(".prodinfo_container");
    const productInfoBlock = createProductInfoBlock(productData);
    prodinfoContainer.appendChild(productInfoBlock);
});

function addToCart(title, price) {
    // 檢查是否有購物車資訊在 localStorage 中
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // 將新商品加入購物車
    cart.push({ title, price });
    // 將更新後的購物車資訊存回 localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // 顯示已加入購物車後跳轉到購物車頁面結帳
    window.alert('已加入購物車');
    window.location.href = 'cart.html';
}
// ↓陣列增加商品內容
// const products = [
//     {
//     title: "日式巨峰窯花瓶",
//     price: "3990",
//     description:"源自日本的巨峰窯花瓶，以其精湛的陶藝工藝與自然的靈感而聞名。每一個花瓶都是匠人用心雕琢的藝術品，展現出獨特的日式美學。瓶身造型優雅，仿如巍峨的山峰，激發著對大自然的敬畏之情。精緻的釉面呈現柔和的色澤，讓花卉在其中綻放出自然、純粹的美。每一次插花都如同在日本秋日的山川間漫遊，感受四季的變幻。"},
//     {
//     title: "日式薩摩燒花瓶",
//     price: "3990",
//     description: "日式薩摩燒花瓶，融合了傳統日本薩摩燒陶藝的精髓，呈現出獨特的美感與工藝。每一個花瓶都是匠心獨運的藝術品，由熟練的陶藝師手工製作而成。其特色在於精緻的紋飾和燒製工藝，以及溫潤的質感，讓人一眼就能感受到日本文化的深厚底蘊。"}
// ]
// document.addEventListener("DOMContentLoaded", function () {
//     const prodinfoContainer = document.getElementById("productContainer");

//     for (let i = 0; i < products.length; i++) {
//         const productInfoBlock = createProductInfoBlock(products[i]);
//         prodinfoContainer.appendChild(productInfoBlock);
//     }
// });