import {combineReducers} from 'redux';
import corrsyReducer from './corrsyReducer';
import {apis} from '../apis/api';

const rootReducer = combineReducers({
	corrsyReducer: corrsyReducer,
	[apis.reducerPath]: apis.reducer,
});

export default rootReducer;
