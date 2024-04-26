import {combineReducers} from 'redux';
import corrsyReducer from './corrsyReducer';

const rootReducer = combineReducers({
	corrsyReducer: corrsyReducer,
});

export default rootReducer;
