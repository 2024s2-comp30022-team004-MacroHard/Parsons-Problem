window.onload = function() {
    const toQuestionButton = document.getElementById('toQuestion');
    const toDataFromHomeButton = document.getElementById('toDataFromHome');

    if (toQuestionButton) {
        toQuestionButton.onclick = function() {
            window.location.href = 'question.html';
        };
    }
    if (toDataFromHomeButton) {
        toDataFromHomeButton.onclick = function() {
            window.location.href = 'data.html?from=home';
        };
    }
}
