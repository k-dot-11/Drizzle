import React, { useState, useRef } from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition, pageStyle, pageVariants } from '../utils/PageAnimations';

const MotionFlex = motion.custom(Flex);

const Weather = () => {
	const [ isOpen, toggleOpen ] = useState(false);
	const sidebar = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2
			}
		}),
		closed: {
			clipPath: 'circle(0px at 0px 0px)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40
			}
		}
	};

	return (
		<MotionFlex
			flexDirection="column"
			initial="initial"
			animate="in"
			align="center"
			py={20}
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<Heading size="2xl">Weather</Heading>
			<Heading size="2xl">Weather</Heading>
			<Heading size="2xl">Weather</Heading>
			<Heading size="2xl">Weather</Heading>
			<Heading size="2xl">Weather</Heading>
			
		</MotionFlex>
	);
};

export default Weather;
