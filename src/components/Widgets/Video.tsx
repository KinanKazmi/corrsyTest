import React from 'react';
import {Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {VideoWidgetType} from '../../types/apiResponseTypes';

const Video = ({data}: {data?: VideoWidgetType}) => {
	return (
		<View style={[sharedStyles.flexColumn, sharedStyles.flexOne]}>
			<Text style={sharedStyles.centerAlignedText}>{data?.title}</Text>
			<Text style={sharedStyles.centerAlignedText}>{data?.introduction}</Text>
		</View>
	);
};

export default Video;
