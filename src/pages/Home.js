import React, { useState, useEffect, useContext } from 'react';
import { Heading, Flex, Text } from '@chakra-ui/core';
import { LocationContext } from '../utils/LocationContext';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition, pageStyle, pageVariants } from '../utils/PageAnimations';

const MotionFlex = motion.custom(Flex);

const Home = () => {
	const { city, refreshToggle } = useContext(LocationContext);
	const [ temp, setTemp ] = useState(0);
	const [ feels, setFeels ] = useState(0);
	const [ weatherDesc, setWeatherDesc ] = useState('');

	useEffect(
		() => {
			fetch(
				'https://api.openweathermap.org/data/2.5/weather?q=' +
					city +
					'&units=metric&appid=46c45385e77633d780f04e05c7a27552'
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					console.log(city);
					setTemp(data.main.temp);
					setFeels(data.main.feels_like);
					setWeatherDesc(data.weather[0].description.toUpperCase());
				});
		},
		[ refreshToggle ]
	);
	return (
		<MotionFlex
			initial="initial"
			animate="in"
			mt={50}
			p={10}
			direction='column'
			exit="out"
			align='center'
			justify='center'
			variants={pageVariants}
			transition={pageTransition}
		>
			<Heading>Weather</Heading>
			<Text>{city.toUpperCase()}</Text>
			<Text>{weatherDesc}</Text>
			<Text>{temp}</Text>
			<Text>{feels}</Text>
		</MotionFlex>
	);
};

export const getCity = () => {
	prompt('hello');
};

export default Home;
