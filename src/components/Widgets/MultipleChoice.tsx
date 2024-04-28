import React from 'react';
import {Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {MCQWidgetType} from '../../types/apiResponseTypes';

const MultipleChoice = ({data}: {data?: MCQWidgetType}) => {
	if (!data) {
		return <></>;
	}
	return (
		<View
			style={[
				sharedStyles.flexColumn,
				sharedStyles.flexOne,
				sharedStyles.basicMargin,
			]}>
			<Text style={sharedStyles.centerAlignedText}>{data.title}</Text>
			<Text style={sharedStyles.centerAlignedText}>
				{`Total Questions: ${data.numberOfQuestion}`}
			</Text>
			<Text
				style={
					sharedStyles.centerAlignedText
				}>{`Total Marks: ${data.totalMark}`}</Text>
			<Text
				style={
					sharedStyles.centerAlignedText
				}>{`Passng Marks: ${data.passingMark}`}</Text>
		</View>
	);
};

export default MultipleChoice;
