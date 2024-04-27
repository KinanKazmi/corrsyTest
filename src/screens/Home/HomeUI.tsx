import React from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import I18n from 'react-native-i18n';
import LocaleSwitcher from '../../components/LocaleSwitcher';

const HomeUI = ({
	changeUserName,
	isDarkMode,
	userName,
}: {
	isDarkMode: boolean;
	userName: string;
	changeUserName: (name: string) => void;
}) => {
	return (
		<SafeAreaView style={styles.sectionContainer}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<LocaleSwitcher />
			<Text>{I18n.t('greeting', {name: userName})}</Text>
			<Button title="dispatch" onPress={() => changeUserName('New Kaz')} />
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

export default HomeUI;
