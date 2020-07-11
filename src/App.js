import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [ city, setCity ] = useState('pilani');
	const [ toggle, setToggle ] = useState(false);
	const [ temp, setTemp ] = useState(0);
	const [ feels, setFeels ] = useState(0);
	const [ weatherDesc, setWeatherDesc ] = useState('');

	const [ url, setURL ] = useState(
		'https://api.openweathermap.org/data/2.5/weather?q=' +
			city +
			'&units=metric&appid=46c45385e77633d780f04e05c7a27552'
	);

	const changeCity = () => {
		setCity(prompt('Enter your city'));
		setURL(
			'https://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=metric&appid=46c45385e77633d780f04e05c7a27552'
		);
		setToggle(!toggle);
	};

	useEffect(
		() => {
			// navigator.geolocation.getCurrentPosition(function(position) {
			// 	setURL(
			// 		'api.openweathermap.org/data/2.5/weather?lat=' +
			// 			position.coords.latitude +
			// 			'&lon=' +
			// 			position.coords.longitude +
			// 			'&units=metric&appid=46c45385e77633d780f04e05c7a27552'
			// 	);
			// })

			fetch(url).then((response) => response.json()).then((data) => {
				console.log(data);
				setTemp(data.main.temp);
				setFeels(data.main.feels_like);
				setWeatherDesc(data.weather[0].description.toUpperCase());
			});
		},
		[ toggle ]
	);



	return (
		<div className="App">
			<nav className="navbar">
				<span className="nav-title">Drizzle 2.0</span>
			</nav>
			<div className="main-container">
				<span className="city-name">{city.toUpperCase()}</span>
				<br />
				<br />
				<span className="date">{weatherDesc}</span>
				<br />
				<br />
				<span className="temperature">{temp} °C</span>
				<br />
				<br />
				<span className="feelslike">{feels} °C</span>

				<br />
				<br />
				<button className="changeCityButton" onClick={changeCity}>
					Change City
				</button>
			</div>
		</div>
	);
}

export default App;
