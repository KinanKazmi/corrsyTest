import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './src/routes/routes';
import store from './src/redux/store';
import './src/intl/setup';
import LocaleProvider from './src/components/LocaleProvider';

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<LocaleProvider>{routes}</LocaleProvider>
			</Provider>
		</NavigationContainer>
	);
}

export default App;
