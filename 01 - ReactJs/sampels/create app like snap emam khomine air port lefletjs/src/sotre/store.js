import { configureStore } from '@reduxjs/toolkit';

// import file name
import showbtnSubmit from '../slices/showbtnSubmit';
import PostingData from '../slices/getresponse';
import GetData from '../slices/GetData';
export const store = configureStore({
	reducer: {
		// name : file
		showingbtn: showbtnSubmit,
		PostingUsers: PostingData,
		getdata: GetData,
	},
});
