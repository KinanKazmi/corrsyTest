import React from 'react';
import {Provider} from 'react-redux';
import './src/intl/setup';
import store from './src/redux/store';
import Main from './src/screens/Main';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}

export default App;
