const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '144a452034msh2ed5ca2bd26cd92p16a1d4jsn11676eafe809',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	try {
		fetch(url, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);

				temp.innerHTML = response.temp;
				temp2.innerHTML = response.temp;
				feels_like.innerHTML = response.feels_like;
				humidity.innerHTML = response.humidity;
				humidity2.innerHTML = response.humidity;
				min_temp.innerHTML = response.min_temp;
				max_temp.innerHTML = response.max_temp;
				wind_speed.innerHTML = response.wind_speed;
				wind_speed2.innerHTML = response.wind_speed;
				wind_degrees.innerHTML = response.wind_degrees;
				normalTime(sunrise,response.sunrise);
				normalTime(sunset,response.sunset);
			
			})
	} catch (error) {
		console.error(error);
	}
}

/* GET OUTPUT FOR INPUT CITY */
submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Karachi");

/* UNIX STAMP TIME TO NORMAL TIME*/
function normalTime(element,unixTimestamp) {
	const dateObj = new Date(unixTimestamp * 1000);
	const hours = dateObj.getUTCHours();
	const minutes = dateObj.getUTCMinutes();

	if (hours <= 12) {
		if (minutes <= 9) {
			element.innerHTML = `${hours}:0${minutes} am`;
		}
		else {
			element.innerHTML = `${hours}:${minutes} am`;
		}
	}
	else {
		if (minutes <= 9) {
			element.innerHTML = `${hours}:0${minutes} pm`;
		}
		else {
			element.innerHTML = `${hours}:${minutes} pm`;
		}
	}
}

/* GET OUTPUT FOR EXTRA INFO */

/* BUTTON */
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');

/*ACTION*/
const buttons = document.querySelectorAll('.b');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
		window.open(`https://www.google.com/search?q=${city.value}weather&oq=${city.value}+weather&aqs=chrome..69i57j0i433i512j0i512l8.3324j1j15&sourceid=chrome&ie=UTF-8`, "_blank");
  });
});





