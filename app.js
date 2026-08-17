function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log("25°C =", celsiusToFahrenheit(25), "°F");
console.log("77°F =", fahrenheitToCelsius(77), "°C");

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };
