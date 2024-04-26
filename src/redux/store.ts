import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {apis} from '../apis/rtkQuery';
import {setupListeners} from '@reduxjs/toolkit/query';
import languageMiddleware from './languageMiddleware';

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apis.middleware).concat(languageMiddleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
