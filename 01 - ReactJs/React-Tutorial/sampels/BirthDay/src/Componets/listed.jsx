import React from 'react';
import { Result } from './Result';
import { Box, Text } from '@chakra-ui/react';
import './result.css';
export const Listed = ({ List, toggel }) => {
	if (toggel) {
		return (
			<div className="result-main">
				{List.map((list) => {
					return <Result ShowList={list} key={list.id}></Result>;
				})}
			</div>
		);
	}
	return (
		<div style={{ marginTop: '55px' }}>
			<Box
				bg="#f87e7e"
				w="fit-content"
				p={4}
				color="white"
				borderRadius="md"
			>
				<Text fontSize="2xl" as="i">
					Not found any data
				</Text>
			</Box>
		</div>
	);
};
