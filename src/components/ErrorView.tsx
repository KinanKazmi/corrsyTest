import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ErrorView = ({error}: {error?: FetchBaseQueryError | unknown}) => {
	if (!error) {
		return <></>;
	}
	return <Text style={styles.error}>{JSON.stringify(error)}</Text>;
};

const styles = StyleSheet.create({
	error: {
		fontSize: 16,
		color: 'red',
	},
});

export default ErrorView;
