// Placeholder variables for the data
let ip = "";
let problem = "";
let timeTaken = "";
let correctness = "";
let totalProblemsAttempted = "";
let correctAnswers = "";

// Function to simulate receiving data from the quiz page
function updateData(newData) {
    ip = newData.ip || "";
    problem = newData.problem || "";
    timeTaken = newData.timeTaken || "";
    correctness = newData.correctness || "";
    totalProblemsAttempted = newData.totalProblems || "";
    correctAnswers = newData.correctAnswers || "";

    displayData();
}

// Function to display the data (or keep the placeholders if data is not available)
function displayData() {
    document.getElementById('ip').innerHTML = ip || "Waiting for IP data...";
    document.getElementById('problem').innerHTML = problem || "Waiting for problem data...";
    document.getElementById('time').innerHTML = timeTaken || "Waiting for time data...";
    document.getElementById('correctness').innerHTML = correctness || "Waiting for correctness data...";
    document.getElementById('total').innerHTML = totalProblemsAttempted || "Waiting for total problems...";
    document.getElementById('correct').innerHTML = correctAnswers || "Waiting for correct answers data...";
}

// Simulate waiting for data by using a setTimeout function
setTimeout(() => {
    // Simulating data received from the quiz page
    const sampleData = {
        ip: "192.168.1.1",
        problem: "Math Problem 1",
        timeTaken: "45",
        correctness: "true",
        totalProblems: "10",
        correctAnswers: "7"
    };

    updateData(sampleData);
}, 5000); // Simulating data arrival after 5 seconds