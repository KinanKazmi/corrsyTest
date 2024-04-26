import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	useColorScheme,
} from 'react-native';
import Home from './Home';

const Main = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView style={styles.sectionContainer}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Home />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Main;
