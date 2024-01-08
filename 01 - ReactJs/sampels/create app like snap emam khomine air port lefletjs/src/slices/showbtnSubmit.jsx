import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showbtn: true,
};

const DataSlice = createSlice({
	name: 'showingbtn',
	initialState: {
		value: initialState,
	},
	reducers: {
		// functions
		ActiveSubmitBtnLatLang: (state) => {
			if (state.value.showbtn) {
				state.value.showbtn = false;
			} else {
				state.value.showbtn = true;
			}
		},
	},
});

export default DataSlice.reducer;
export const { ActiveSubmitBtnLatLang } = DataSlice.actions;
