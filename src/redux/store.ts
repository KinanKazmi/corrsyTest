import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {apis} from '../apis/api';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apis.middleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
