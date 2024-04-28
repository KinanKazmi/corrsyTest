import React from 'react';
import {Text, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {sharedStyles} from '../../styles/sharedStyles';
import {VideoWidgetType} from '../../types/apiResponseTypes';

const Video = ({data}: {data?: VideoWidgetType}) => {
	const url = data?.videoUrl || '';
	const urlPath = url.substring(url.lastIndexOf('v=') + 2, url.length);
	return (
		<View style={[sharedStyles.flexColumn, sharedStyles.flexOne]}>
			<Text style={sharedStyles.centerAlignedText}>{data?.title}</Text>
			<Text style={sharedStyles.centerAlignedText}>{data?.introduction}</Text>
			{urlPath && <YoutubePlayer height={300} videoId={urlPath} />}
		</View>
	);
};

export default Video;
