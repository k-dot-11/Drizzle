import React from 'react';
import { Box, Heading, Flex, Text, Button, Icon } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import { useContext } from 'react';
import { LocationContext } from '../utils/LocationContext';

const MenuItems = ({ children, to }) => (
	<Link to={to}>
		<Text mr={[ 0, 0, 5, 10 ]} mt={[ 5, 5, 0, 0 ]} fontSize="lg" display="block">
			{children}
		</Text>
	</Link>
);

const Navbar = (props) => {
	const [ show, setShow ] = React.useState(false);
	const handleToggle = () => setShow(!show);
	const { changeLocation } = useContext(LocationContext);

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			py="1rem"
			px="2rem"
			bg="gray.700"
			color="white"
			{...props}
		>
			<Flex align="center" mr={5}>
				<Icon name="sun" mr="0.7rem" size="45px" />

				<Heading as="h1" size="xl">
					Drizzle
				</Heading>
			</Flex>

			<Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
				<svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</Box>

			<Box display={{ base: show ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
				<Flex
					align="center"
					justify={[ 'center', 'space-between', 'flex-end', 'flex-end' ]}
					direction={[ 'column', 'row', 'row', 'row' ]}
					pt={[ 4, 4, 0, 0 ]}
				>
					<MenuItems to="/">Home</MenuItems>
					<MenuItems to="/weather">Weather</MenuItems>
					<MenuItems to="/calendar">Calendar</MenuItems>
					<Button
						mt={[ 5, 5, 0, 0 ]}
						bg="transparent"
						border="1px"
						borderRadius={40}
						onClick={() => {
							var newCity = prompt('Enter the city');
							changeLocation(newCity);
						}}
					>
						Change Location
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
