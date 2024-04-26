import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	nameObj: {name: 'kaz'},
	locale: 'ar',
};

const corrsySlice = createSlice({
	name: 'corrsy',
	initialState,
	reducers: {
		changeName: (state, action) => {
			switch (action.type) {
				case 'corrsy/changeName':
					return {...state, nameObj: {name: action.payload}};
				default:
					return state;
			}
		},
	},
});

export const {changeName} = corrsySlice.actions;
export default corrsySlice.reducer;
