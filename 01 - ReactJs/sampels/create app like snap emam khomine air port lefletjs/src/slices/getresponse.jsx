import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import data from './showbtnSubmit';

const url = 'https://exam.pishgamanasia.com/webapi/Account/Login';

const initialState = {
	data: [], // i want set response here
	name: 'mohsen',
};

const PostUsers = createSlice({
	name: 'PostingUsers',
	initialState: { value: initialState },
	reducers: {
		SendData: (state, action) => {
			state.value.data = action.payload;
		},
	},
});
export default PostUsers.reducer;
export const { SendData } = PostUsers.actions;
