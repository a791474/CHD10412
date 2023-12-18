//商品新增
var adds = document.getElementsByClassName("btnPlus");
for (var i = 0; i < adds.length; i++) {
    adds[i].onclick = function () {
        //1.獲取輸入框對象
        var inputEle = this.previousElementSibling;
        //2.獲取原來的值
        var inputValue = inputEle.value;
        //3.重新複製
        inputEle.value = parseInt(inputValue) + 1;
        //計算金額
        //1.數量
        var number = parseInt(inputEle.value);
        //2.單價
        var commElement = this.closest('.cart-detail').querySelector(".comm");
        if (commElement !== null) {
            var price = parseFloat(commElement.textContent);
            //3.金額
            var sum = number * price;
            //4.賦值 保留2位小數點->toFixed(2)
            this.closest('.cart-detail').querySelector(".total").textContent = sum;
            getAmount();
        } else {
            // console.error(".comm element not found!");
        }
    }
}

//商品減少
var minus = document.getElementsByClassName("btnMinus");
for (var i = 0; i < minus.length; i++) {
    minus[i].onclick = function () {
        //1.獲取輸入框對象
        var inputEle = this.nextElementSibling;
        //2.獲取原來的值
        var inputValue = inputEle.value;
        
        //判斷
        if (parseInt(inputValue) > 1) {
            //3.重新複製
            inputEle.value = parseInt(inputValue) - 1;
            //加上計算金額
            //1.數量
            var number = parseInt(inputEle.value);
            //2.單價
            var commElement = this.closest('.cart-detail').querySelector(".comm");
            if (commElement !== null) {
                var price = parseFloat(commElement.textContent);
                //3.金額
                var sum = number * price;
                //4.賦值 保留2位小數點->toFixed(2)
                this.closest('.cart-detail').querySelector(".total").textContent = sum;
                getAmount();
            } else {
                // console.error(".comm element not found!");
            }
        }
    }
}

var removeItems = document.getElementsByClassName("remove");
for (var i = 0; i < removeItems.length; i++) {
    removeItems[i].onclick = function () {
        var itemToRemove = this.closest('.cart-item');
        if (itemToRemove !== null) {
            itemToRemove.remove();
            // 調用方法重新計算金額
            getAmount();

            // 檢查是否還有商品存在
            var cartItems = document.querySelectorAll('.cart-item');
            if (cartItems.length === 0) {
                document.getElementById('cartContainer').style.display = 'none';
                document.querySelector('.col-3').style.display = 'none';
                document.getElementById('col-9Title').style.display = 'none';
                document.getElementById('emptyCartContainer').style.display = 'flex';
            }
        } else {
            // console.error("Item to remove not found!");
        }
    }
}

//計算金額
function getAmount() {
    var sum = 0;
    var totals = document.getElementsByClassName("total");
    for (var i = 0; i < totals.length; i++) {
        sum += parseFloat(totals[i].textContent);
    }
    document.getElementById("sum2").textContent = sum;

// 設定運費
    var shipping = document.getElementById("shipping");

    var itemCount = document.querySelectorAll('.cart-inputs input[type="text"]');
    var totalItems = 0;

    for (var j = 0; j < itemCount.length; j++) {
        totalItems += parseInt(itemCount[j].value);
    }

    var shippingCost = 100; // 金額
    var orderTotal = document.getElementById("sum3");

    if (totalItems === 0) {
        shipping.innerHTML = 0;
        orderTotal.innerHTML = 0; // 將總金額設為零
    } else {
        shipping.innerHTML = shippingCost;
        orderTotal.innerHTML = sum  + shippingCost;
    }
}