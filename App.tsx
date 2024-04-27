import 'react-native-gesture-handler';
import React from 'react';
import './src/intl/languageSetup';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './src/routes/routes';
import store from './src/redux/store';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<NavigationContainer>{routes}</NavigationContainer>
		</Provider>
	);
}

export default App;
