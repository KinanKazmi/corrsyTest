import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export const routes = (
	<Stack.Navigator initialRouteName={'Home'}>
		<Stack.Screen name="Home" component={Home} />
	</Stack.Navigator>
);

export type RootStackParamList = {
	Home: unknown;
};
