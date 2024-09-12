window.onload = function() {
    const totalAttemptsDisplay = document.getElementById('totalAttempts');
    const accuracyDisplay = document.getElementById('accuracy');
    const backButton = document.getElementById('backButton');

    // 从Cookie中获取答题次数和正确答案次数
    let totalAttempts = getCookie('totalAttempts') ? parseInt(getCookie('totalAttempts')) : 0;
    let correctAnswers = getCookie('correctAnswers') ? parseInt(getCookie('correctAnswers')) : 0;

    // 计算正确率
    let accuracy = totalAttempts > 0 ? (correctAnswers / totalAttempts * 100).toFixed(2) : 0;

    // 显示数据
    totalAttemptsDisplay.textContent = totalAttempts;
    accuracyDisplay.textContent = accuracy;

    // 处理返回按钮逻辑
    const params = new URLSearchParams(window.location.search);
    const fromPage = params.get('from');

    if (backButton) {
        if (fromPage === 'home') {
            backButton.onclick = function() {
                window.location.href = '../html/home.html';
            };
        } else if (fromPage === 'question') {
            backButton.onclick = function() {
                window.location.href = '../html/question.html';
            };
        }
    }
}

// 获取Cookie的函数
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
