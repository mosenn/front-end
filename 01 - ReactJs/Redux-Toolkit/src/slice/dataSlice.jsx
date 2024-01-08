
import { createSlice } from '@reduxjs/toolkit';
const initialstate = {

}

const DataSlice = createSlice({
    name:'data',
    initialState:{
        value:initialstate,
    },

reducers: {
    Log:(state, action) => {
        console.log('i am here')
    }
}
});

export default DataSlice.reducer;
export const { Log} = DataSlice.actions;


