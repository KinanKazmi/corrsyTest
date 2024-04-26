import React from 'react';
import {
	Button,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Switch,
	Text,
} from 'react-native';
import I18n from 'react-native-i18n';

const HomeUI = ({
	changeUserName,
	toggleLang,
	lang,
	isDarkMode,
	userName,
}: {
	isDarkMode: boolean;
	userName: string;
	lang: string;
	changeUserName: (name: string) => void;
	toggleLang: () => void;
}) => {
	return (
		<SafeAreaView style={styles.sectionContainer}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Switch onValueChange={toggleLang} value={lang === 'ar'} />
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
