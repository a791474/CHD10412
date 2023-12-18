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

//add
var adds = document.getElementsByClassName("btnPlus");
//循環
for (var i = 0; i < adds.length; i++) {
    //單擊事件
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
        var commElement = this.closest('.item').querySelector(".qty");
        if (commElement !== null) {
            var price = parseFloat(commElement.textContent);

            //3.金額
            var sum = number * price;

            //4.賦值 保留2位小數點->toFixed(2)
            this.closest('.item').querySelector(".total").textContent = sum;

            //調用方法
            getAmount();
        } else {
            console.error(".comm element not found!");
        }
    }
}

//minus
var minus = document.getElementsByClassName("minus");
//循環
for (var i = 0; i < minus.length; i++) {
    //單擊事件
    minus[i].onclick = function () {
        //1.獲取輸入框對象
        var inputEle = this.nextElementSibling;
        //2.獲取原來的值
        var inputValue = inputEle.value;
        
        //判斷
        if (parseInt(inputValue) > 1) {
            //3.重新複製
            inputEle.value = parseInt(inputValue) - 1;


            //計算金額
            //1.數量
            var number = parseInt(inputEle.value);
            //2.單價
            var commElement = this.closest('.item').querySelector(".comm");
            if (commElement !== null) {
                var price = parseFloat(commElement.textContent);

                //3.金額
                var sum = number * price;

                //4.賦值 保留2位小數點->toFixed(2)
                this.closest('.item').querySelector(".total").textContent = sum;

                //調用方法
                getAmount();
            } else {
                console.error(".comm element not found!");
            }
        }
    }
}



//刪除品項
var removeItems = document.getElementsByClassName("remove");
//循環
for (var i = 0; i < removeItems.length; i++) {
    //點擊事件
    removeItems[i].onclick = function () {
        var itemToRemove = this.closest('.item');
        if (itemToRemove !== null) {
            itemToRemove.remove();
            // 調用方法重新計算金額
            getAmount();
        } else {
            // console.error("Item to remove not found!");
        }
    }
}