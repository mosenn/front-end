import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
	method: 'GET',
	url: 'https://coinranking1.p.rapidapi.com/coins',
	params: {
		referenceCurrencyUuid: 'yhjMzLPhuIDl',
		timePeriod: '24h',
		tiers: '1',
		orderBy: 'marketCap',
		orderDirection: 'desc',
		limit: '50',
		offset: '0',
	},
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		'X-RapidAPI-Key': '09d096c14bmsh80bc65c9e2d4de0p1fa85ejsn02132f3b6bfd',
	},
};
let getdata = await axios.request(options);
let data = await getdata.data.data;

// console.log(data);

const initialstate = {
	stateData: data.coins,
	Searchquery: '',
	totalData: data.stats,
};

const SliceCoins = createSlice({
	name: 'dataCoins',
	initialState: {
		value: initialstate,
	},
	reducers: {
		// functions
		SearchFun: (state, action) => {
			state.value.Searchquery = action.payload;
			console.log(action.payload, 'payload');
			console.log(state.value.Searchquery, 'searchquery');
			console.log('search fun is working');
		},
	},
});

export default SliceCoins.reducer;
export const { SearchFun } = SliceCoins.actions;
