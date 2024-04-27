import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {textError} from '../utils/appColors';

const ErrorView = ({error}: {error?: FetchBaseQueryError | unknown}) => {
	if (!error) {
		return <></>;
	}
	return (
		<View style={styles.errorContainer}>
			<Text style={styles.error}>{JSON.stringify(error)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	errorContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	error: {
		fontSize: 16,
		color: textError,
	},
});

export default ErrorView;
