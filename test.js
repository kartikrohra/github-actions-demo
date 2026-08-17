const { celsiusToFahrenheit, fahrenheitToCelsius } = require("./app");

if (celsiusToFahrenheit(25) === 77) {
    console.log("Celsius to Fahrenheit test: PASSED");
} else {
    console.log("Celsius to Fahrenheit test: FAILED");
    process.exit(1);
}

if (fahrenheitToCelsius(77) === 25) {
    console.log("Fahrenheit to Celsius test: PASSED");
} else {
    console.log("Fahrenheit to Celsius test: FAILED");
    process.exit(1);
}

console.log("All tests passed!");
