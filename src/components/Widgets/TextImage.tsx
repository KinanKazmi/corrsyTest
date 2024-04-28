import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {LessonWidgetContentType} from '../../types/apiResponseTypes';
import Spacer from '../Spacer';

const TextImage = ({data}: {data?: LessonWidgetContentType}) => {
	return (
		<View
			style={[
				sharedStyles.flexColumn,
				sharedStyles.flexOne,
				sharedStyles.basicMargin,
			]}>
			<Text style={sharedStyles.centerAlignedText}>{data?.contentTitle}</Text>
			<Spacer vertical />
			{data?.image && (
				<Image source={{uri: data?.image}} style={styles.imageStyle} />
			)}
			<Text style={sharedStyles.centerAlignedText}>{data?.description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		resizeMode: 'contain',
		width: 300,
		height: 300,
		alignSelf: 'center',
	},
});

export default TextImage;
