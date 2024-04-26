import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	nameObj: {name: 'kaz'},
	locale: 'en',
};

const corrsySlice = createSlice({
	name: 'corrsy',
	initialState,
	reducers: {
		changeLocale: (state, action) => {
			switch (action.type) {
				case 'corrsy/changeLocale':
					return {...state, locale: action.payload || 'en'};
				default:
					return state;
			}
		},
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

export const {changeName, changeLocale} = corrsySlice.actions;
export default corrsySlice.reducer;
