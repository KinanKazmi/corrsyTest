import React from 'react';
import {Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {MCQWidgetType} from '../../types/apiResponseTypes';

const MultipleChoice = ({data}: {data?: MCQWidgetType}) => {
	if (!data) {
		return <></>;
	}
	return (
		<View style={[sharedStyles.flexColumn, sharedStyles.flexOne]}>
			<Text style={sharedStyles.centerAlignedText}>{JSON.stringify(data)}</Text>
		</View>
	);
};

export default MultipleChoice;
