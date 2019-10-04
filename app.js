let celInput = document.querySelector('#celcius > input');
let fahInput = document.querySelector('#fahrenheit > input');
let kelInput = document.querySelector('#kelvin > input');

main();

function main() {
    celInput.addEventListener('input', celciusToFahAndKel);
    fahInput.addEventListener('input', fahToCelAndKel);
    kelInput.addEventListener('input', kelToCelAndFah);   
}

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciusToFahAndKel() {
    let cTemp = parseFloat(celInput.value);
    let fTemp = (cTemp * (9/5)) + 32;
    let kTemp = cTemp + 273.15;
    fahInput.value = roundNum(fTemp);
    kelInput.value = roundNum(kTemp);
}

function fahToCelAndKel() {
    let fTemp = parseFloat(fahInput.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp + 459.67) * 5/9;
    celInput.value = roundNum(cTemp);
    kelInput.value = roundNum(kTemp);
}

function kelToCelAndFah() {
    let kTemp = parseFloat(kelInput.value);
    let cTemp = kTemp - 273.15 ;
    let fTemp = 9/5 * (kTemp - 273) + 32;
    celInput.value = roundNum(cTemp);
    fahInput.value = roundNum(fTemp);
}