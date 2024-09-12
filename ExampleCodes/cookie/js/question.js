// 设置Cookie的函数
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(name + "=" + value + ";" + expires + ";path=/")
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

window.onload = function() {
    const submitAnswerButton = document.getElementById('submitAnswer');
    const toHomeFromQuestionButton = document.getElementById('toHomeFromQuestion');
    const toDataFromQuestionButton = document.getElementById('toDataFromQuestion');

    if (submitAnswerButton) {
        submitAnswerButton.onclick = function() {
            checkAnswer();
        };
    }
    if (toHomeFromQuestionButton) {
        toHomeFromQuestionButton.onclick = function() {
            window.location.href = '../html/home.html';
        };
    }
    if (toDataFromQuestionButton) {
        toDataFromQuestionButton.onclick = function() {
            window.location.href = '../html/data.html?from=question';
        };
    }
}

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const resultElement = document.getElementById('result');

    // 从Cookie中获取答题次数和正确次数
    let totalAttempts = getCookie('totalAttempts') ? parseInt(getCookie('totalAttempts')) : 0;
    let correctAnswers = getCookie('correctAnswers') ? parseInt(getCookie('correctAnswers')) : 0;

    totalAttempts++; // 总答题次数增加

    if (answer === '2') {
        correctAnswers++; // 如果答案正确，正确次数增加
        resultElement.textContent = '正确!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = '错误! 正确答案是 2';
        resultElement.style.color = 'red';
    }

    // 更新Cookie中的答题次数和正确次数
    setCookie('totalAttempts', totalAttempts, 30); // 存储30天
    setCookie('correctAnswers', correctAnswers, 30); // 存储30天

    answerInput.value = '';
}
