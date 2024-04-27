import React from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
	Dimensions,
} from 'react-native';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {
	useSafeAreaFrame,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {transparentWhite, loaderColor} from '../utils/appColors';
const {width, height} = Dimensions.get('window');

const FullScreenLoader = ({loading}: {loading?: boolean}) => {
	const frame = useSafeAreaFrame();
	const insets = useSafeAreaInsets();
	const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
	if (!loading) {
		return <View />;
	}
	return (
		<View style={[styles.loaderContainer, {height: height - headerHeight}]}>
			<Text>Loading ... </Text>
			<ActivityIndicator size={'large'} color={loaderColor} />
		</View>
	);
};

const styles = StyleSheet.create({
	loaderContainer: {
		zIndex: 5,
		position: 'absolute',
		width: width,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: transparentWhite,
	},
});

export default FullScreenLoader;
