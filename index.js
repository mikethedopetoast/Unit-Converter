// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const meterToFeet = 3.28084
const literToGallon = 0.264172
const kilogramToPound = 2.20462

const converter = document.getElementById("convert-btn")
converter.addEventListener("click", () => {
    const scalar = Number(document.getElementById("scalar").value)
    
    // Length (Meter/Feet)
    const length = document.querySelector("#length p")
    const feet = (scalar * meterToFeet).toFixed(3)
    const meters = (scalar / meterToFeet).toFixed(3)
    length.textContent = `${scalar} meters = ${feet} feet | ${scalar} feet = ${meters} meters`

    // Volume (Liters/Gallons)
    const volume = document.querySelector("#volume p")
    const gallons = (scalar * literToGallon).toFixed(3)
    const liters = (scalar / literToGallon).toFixed(3)
    volume.textContent = `${scalar} liters = ${gallons} gallons | ${scalar} gallons = ${liters} liters`

    // Mass (Kilograms/Pounds)
    const mass = document.querySelector("#mass p")
    const pounds = (scalar * kilogramToPound).toFixed(3)
    const kilos = (scalar / kilogramToPound).toFixed(3)
    mass.textContent = `${scalar} kilos = ${pounds} pounds | ${scalar} pounds = ${kilos} kilos`
})