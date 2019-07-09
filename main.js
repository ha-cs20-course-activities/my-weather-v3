// My Weather

// Add Event Listeners
celsBtn.addEventListener('click', convertToCels);
fahrBtn.addEventListener('click', convertToFahr);

// Event Functions
function convertToFahr() {
    if (currentUnit == "C") {
        convert(celsToFahr, "F");
        currentUnit = "F";
        celsBtn.classList.remove('active');
        fahrBtn.classList.add('active');
    }

}

function convertToCels() {
    if (currentUnit == "F") {
        convert(fahrToCels, "C");
        currentUnit = "C";
        fahrBtn.classList.remove('active');
        celsBtn.classList.add('active');
    }
}

// Helper Functions
function convert(convertFunc, unit) {
    // Convert & Display Temperatures
    weekEl.innerHTML = ""; // Clear html display
    for (let i = 0; i < weather.length; i++) {
        weather[i].temp = convertFunc(weather[i].temp); // Convert Temp
        weekEl.innerHTML += `<p>${weather[i].day}: ${weather[i].temp.toFixed(1)}&deg;${unit} ${weather[i].pop} POP</p>` // Display
    }
}

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}

function celsToFahr(celsTemp) {
    return celsTemp * 9 / 5 + 32;
}