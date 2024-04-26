import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './src/routes/routes';
import store from './src/redux/store';
import './src/intl/setup';

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<Provider store={store}>{routes}</Provider>
		</NavigationContainer>
	);
}

export default App;
