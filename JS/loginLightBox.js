const loginButton = document.getElementById('loginButton');
const overlay = document.getElementById('overlay');
const loginModal = document.getElementById('loginModal');
const usernameDisplay = document.getElementById('usernameDisplay');

loginButton.addEventListener('click', openModal);

// 打開燈箱
function openModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loginModal').style.display = 'block';
}
// 關閉燈箱
function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // 清空錯誤訊息
    errorMessage.textContent = '';

    // 進行輸入內容的判斷
    if (username === '' && password === '') {
        errorMessage.textContent = '請輸入登入資訊';
    } else if (username === '') {
        errorMessage.textContent = '請輸入帳號';
    } else if (password === '') {
        errorMessage.textContent = '請輸入密碼';
    } else {
        // 如果有輸入帳號和密碼，進行登入判斷
        if (username === 'Yee' && password === 'a12345') {
            // 登入成功的處理邏輯
            alert(`歡迎回來，${username}！`);
            usernameDisplay.textContent = username;
            closeModal();
        } else {
            // 登入失敗的處理邏輯
            alert('登入失敗，將跳轉至註冊頁面。');
            window.location.href = "register.html";
        }
    }
}