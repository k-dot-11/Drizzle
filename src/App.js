import React from 'react';
import './App.css';
import { Router, Route, Switch,  useLocation } from 'react-router-dom';
import Home, { getCity } from './pages/Home';
import Calendar from './pages/Calendar';
import Weather from './pages/Weather';
import Navbar from './components/Navbar';
import LocationContextProvider from './utils/LocationContext';
import { Box } from '@chakra-ui/core';
import { AnimatePresence } from 'framer-motion';

function App() {
	const loc = useLocation();
	return (
			<LocationContextProvider>
				<div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
					<Navbar changeCity={getCity} />
					<AnimatePresence exitBeforeEnter>
						<Switch location={loc} key={loc.key}>
							<Route path="/calendar" component={Calendar} />
							<Route path="/weather" component={Weather} />
							<Route path="/" component={Home} />
						</Switch>
					</AnimatePresence>
				</div>
			</LocationContextProvider>
	);
}

export default App;
