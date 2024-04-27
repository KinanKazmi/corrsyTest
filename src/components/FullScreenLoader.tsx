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
			<ActivityIndicator size={'large'} color={'skyblue'} />
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
		backgroundColor: 'rgba(255,255,255,0.9)',
	},
});

export default FullScreenLoader;
