import React from 'react';
import {Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {LessonWidgetContentType} from '../../types/apiResponseTypes';

const TextImage = ({data}: {data?: LessonWidgetContentType}) => {
	return (
		<View style={[sharedStyles.flexColumn, sharedStyles.flexOne]}>
			<Text style={sharedStyles.centerAlignedText}>{data?.contentTitle}</Text>
			<Text style={sharedStyles.centerAlignedText}>{data?.description}</Text>
		</View>
	);
};

export default TextImage;
