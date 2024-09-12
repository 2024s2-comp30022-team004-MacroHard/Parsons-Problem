// Function to handle page navigation
function navigateTo(page) {
    window.location.href = page; // Redirect to the specified page
}

// Simulate receiving real-time data from backend (replace with actual data fetching logic)
setTimeout(() => {
    document.getElementById("ip-address").textContent = "192.168.1.1";  // Simulated IP address
    document.getElementById("problem-generated").textContent = "Math Problem #5";
    document.getElementById("time-taken").textContent = "42";  // Simulated time taken in seconds
    document.getElementById("correctness").textContent = "True";  // Simulated correctness
    document.getElementById("total-problems").textContent = "10";  // Total problems attempted
    document.getElementById("correct-answers").textContent = "8";  // Simulated correct answers
}, 2000);  // Simulate delay in fetching data
