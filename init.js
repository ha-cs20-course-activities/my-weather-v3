// Initialize Weather Data

// Global Weather Variables
let weather = [];
let currentUnit = "C";

// DOM Elements
let weekEl = document.getElementById('week-weather');
let celsBtn = document.getElementById('cels');
let fahrBtn = document.getElementById('fahr');

// Load Weather Data from File
fetch('weather-data.txt').then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(data) {
    // Take data from file and store as an object in weather array
    let arrayOfLines = data.split('\r\n');
    let dayData;
    for (let i = 0; i < arrayOfLines.length; i++) {
        dayData = arrayOfLines[i].split(',');
        // Push object of day data to array
        weather.push({
            day: dayData[0],
            temp: Number(dayData[1]),
            pop: dayData[2]
        });
    }

    displayWeatherData();
}


function displayWeatherData() {
    for (let i = 0; i < weather.length; i++) {
        weekEl.innerHTML += `<p>${weather[i].day}: ${weather[i].temp.toFixed(1)}&deg;C ${weather[i].pop} POP</p>`
    }
}