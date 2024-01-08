import './App.css';
import { Listed } from './Componets/listed';
import { data } from './data/Data';
import { useState } from 'react';
import { Button, ButtonGroup, Box, Text } from '@chakra-ui/react';
import { Header } from './Componets/Hedaer/Hedaer';
function App() {
	const [dataList, SetDataList] = useState(data);
	const [toggelParentlist, Settoggel] = useState(true);

	const Removelist = () => {
		SetDataList([]);
		Settoggel(false);
	};
	const Showlist = () => {
		SetDataList(data);
		Settoggel(true);
	};
	return (
		<section className="App">
			<Header />
			<Box p={4} color="green" w="fit-content" h="fit-content">
				<Text fontSize="20px" mt={50}>
					{' '}
					You have {dataList.length} user in list{' '}
				</Text>
			</Box>
			<ButtonGroup>
				<Button colorScheme="pink" onClick={Removelist}>
					Clear All
				</Button>
				<Button colorScheme="teal" onClick={Showlist}>
					ShowAll
				</Button>
			</ButtonGroup>
			<Listed List={dataList} toggel={toggelParentlist}></Listed>
		</section>
	);
}

export default App;
