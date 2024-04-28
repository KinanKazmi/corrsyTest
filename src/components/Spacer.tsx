import React from 'react';
import {StyleSheet, View} from 'react-native';

const Spacer = ({vertical}: {vertical?: boolean}) => {
	return (
		<View style={vertical ? styles.verticalSpace : styles.horizontalSpace} />
	);
};

const styles = StyleSheet.create({
	verticalSpace: {
		marginVertical: 10,
	},
	horizontalSpace: {
		marginHorizontal: 10,
	},
});

export default Spacer;
