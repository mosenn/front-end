import { configureStore } from '@reduxjs/toolkit';
import SliceCoins from '../app/Slice';

export const store = configureStore({
	reducer: {
		dataCoins: SliceCoins,
	},
});
