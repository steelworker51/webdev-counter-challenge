"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");

function incrementCount() {
    count += 1;  // Increase the count by 1
}

function decrementCount() {
    count -= 1;  // Decrease the count by 1
}

function resetCount() {
    count = 0;  // Reset the count to 0
}

function renderUpdatedCount() {
    countElement.innerText = count;  // Update the count element with the current count
}

incrementBtn.addEventListener("click", function () {
    incrementCount();  // Call increment function when increment button is clicked
    renderUpdatedCount();  // Update the displayed count
});

resetBtn.addEventListener("click", function () {
    resetCount();  // Call reset function when reset button is clicked
    renderUpdatedCount();  // Update the displayed count
});

decrementBtn.addEventListener("click", function () {
    decrementCount();  // Call decrement function when decrement button is clicked
    renderUpdatedCount();  // Update the displayed count
});
