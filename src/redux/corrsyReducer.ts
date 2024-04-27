import {createSlice} from '@reduxjs/toolkit';
import I18n from 'react-native-i18n';
import {App_Languages as Languages} from '../utils/data';

const initialState = {
	nameObj: {name: 'kaz'},
	locale: Languages.english,
};

const corrsySlice = createSlice({
	name: 'corrsy',
	initialState,
	reducers: {
		changeLocale: (state, action) => {
			switch (action.type) {
				case 'corrsy/changeLocale':
					const newLocale = action.payload || Languages.english;
					I18n.locale = newLocale;
					return {...state, locale: newLocale};
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
