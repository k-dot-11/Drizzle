import React from 'react';
import { Heading, Flex, Text } from '@chakra-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition, pageStyle, pageVariants } from '../utils/PageAnimations';

const MotionFlex = motion.custom(Flex);

const Weather = () => {
	

	return (
		<MotionFlex
			flexDirection="column"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<Heading size='2xl'>Weather</Heading>
			<Heading size='xl'>Lorem Ipsum</Heading>
			<Heading size='lg'>sdgsFgfgbdfg</Heading>
			<Heading size='md'>fdzgfzdfzdfdbdfbx</Heading>
			
		</MotionFlex>
	);
};

export default Weather;
