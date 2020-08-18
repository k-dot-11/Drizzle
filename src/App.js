import React from 'react';
import './App.css';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home, { getCity } from './pages/Home';
import Calendar from './pages/Calendar';
import Weather from './pages/Weather';
import Navbar from './components/Navbar';
import LocationContextProvider from './utils/LocationContext';

function App() {
	const changeCity = Home.changeCity;

	return (
		<LocationContextProvider>
			<BrowserRouter>
				<div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
					<Navbar changeCity={getCity} />
					<Switch>
						<Route path="/calendar">
							<Calendar />
						</Route>
						<Route path="/weather">
							<Weather />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</LocationContextProvider>
	);
}

export default App;
