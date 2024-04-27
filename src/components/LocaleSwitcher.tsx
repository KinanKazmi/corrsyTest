import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {changeLocale} from '../redux/corrsyReducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {languages, App_Languages as Languages} from '../utils/data';

const LocaleSwitcher = () => {
	const stateData = useSelector((state: RootState) => state.corrsyReducer);
	const {locale} = stateData;
	const dispatch = useDispatch();

	const toggleLang = () => {
		dispatch(
			changeLocale(
				stateData.locale === Languages.english
					? Languages.arabic
					: Languages.english,
			),
		);
	};

	return (
		<View style={styles.switchContainer}>
			<Text>{languages[locale]}</Text>
			<Switch onValueChange={toggleLang} value={locale === Languages.arabic} />
		</View>
	);
};

const styles = StyleSheet.create({
	switchContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default LocaleSwitcher;
