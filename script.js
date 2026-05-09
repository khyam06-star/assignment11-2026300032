// Part 1: Time-based Greeting
let userName = prompt("What is your name?");
let currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
   greeting = "Good morning";
} else if (currentHour < 18) {
   greeting = "Good afternoon";
} else {
   greeting = "Good evening";
}
console.log(`${greeting}, ${userName}!`);

// Part 2: Age and Days Lived Verification
let birthYear = prompt("What year were you born?");
let currentYear = 2026; 
let age = currentYear - birthYear;
let daysLived = age * 365;

console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
   console.log("You are an adult.");
} else {
   console.log("You are a minor.");
}

// --- ASSIGNMENT PART: Dark Mode Toggle ---

// 1. Select the button using document.querySelector
const toggleBtn = document.querySelector('#dark-mode-toggle');

// 2. Add the Event Listener
toggleBtn.addEventListener('click', function() {
    // 3. Use classList.toggle to switch the dark-mode class
    document.body.classList.toggle('dark-mode');
    
    // Debugging check for your screenshot
    console.log("Dark mode toggled. Current state: " + document.body.classList.contains('dark-mode'));
});