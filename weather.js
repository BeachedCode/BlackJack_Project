let apiKey = "06ee8b7e2ee5265011d332cc5d55eb45";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=cincinnati&appid=06ee8b7e2ee5265011d332cc5d55eb45&units=imperial"
let getWeather;

// dom
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');


// event listener 
button.addEventListener('click', function(){

    // Fection data from open weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=imperial&appid=06ee8b7e2ee5265011d332cc5d55eb45`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 

})

// display in html doc
const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°F`
    desc.innerText=`${weather.weather[0].main}`

}

    