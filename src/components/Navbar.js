import React from 'react';
import { Box, Heading, Flex, Text, Button, Icon } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LocationContext } from '../utils/LocationContext';
import { motion, useCycle } from 'framer-motion';

const MotionFlex = motion.custom(Flex);
const MotionText = motion.custom(Text);
const MotionButton = motion.custom(Button);
const MotionHeading = motion.custom(Heading);

const MenuItems = ({ children, to }) => (
	<Link to={to}>
		<MotionText
			whileHover={{ opacity: 0.8, scale: 1.1 }}
			onTap={{ opacity: 1, scale: 0.8 }}
			mr={[ 0, 0, 5, 10 ]}
			mt={[ 5, 5, 0, 0 ]}
			fontSize="lg"
			display="block"
		>
			{children}
		</MotionText>
	</Link>
);

const Navbar = (props) => {
	const [ show, setShow ] = React.useState(false);
	const handleToggle = () => setShow(!show);
	const [ isOpen, toggleOpen ] = useCycle(false, true);
	const { changeLocation } = useContext(LocationContext);
	const sidebar = {
		open: (height = 500) => ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2
			}
		}),
		closed: {
			clipPath: 'circle(0px at 40px 40px)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40
			}
		}
	};

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
			zIndex={11}
			{...props}
			position="fixed"
			w="100vw"
			marginBottom="2rem"
		>
			<Flex align="center" mr={5}>
				<Icon name="sun" mr="0.7rem" size="45px" onClick={() => toggleOpen()} />

				<Heading as="h1" size="xl">
					Drizzle
				</Heading>
			</Flex>
			<MotionFlex initial={false} animate={isOpen ? 'open' : 'closed'} direction="column" zIndex={10}>
				<MotionFlex
					color="gray.700"
					position="absolute"
					top={0}
					left={0}
					bg="gray.300"
					align="center"
					direction="column"
					h="100vh"
					variants={sidebar}
				>
					<MotionHeading size="lg" mt={2} mb={2}>
						Home
					</MotionHeading>
					<MotionHeading size="lg" mt={2} mb={2}>
						Weather
					</MotionHeading>
					<MotionHeading size="lg" mt={2} mb={2}>
						Calendar
					</MotionHeading>
					<Button onClick={() => toggleOpen(!isOpen)} w={[ '2xs', 'xs', 'sm', 'sm' ]}>
						Close
					</Button>
				</MotionFlex>
			</MotionFlex>

			<Box display={{ base: 'block', md: 'none' }} onClick={()=>toggleOpen(!isOpen)}>
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
					<MotionButton
						whileHover={{ opacity: 0.7, transition: { duration: 0.02 } }}
						mt={[ 5, 5, 0, 0 ]}
						color="gray.600"
						border="1px"
						borderRadius={40}
						onClick={() => {
							var newCity = prompt('Enter the city');
							if (newCity) changeLocation(newCity);
							else alert('Enter a valid city name')
						}}
					>
						Change Location
					</MotionButton>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
