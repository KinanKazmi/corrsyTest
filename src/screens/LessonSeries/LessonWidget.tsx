import React, {useState} from 'react';
import {LessonDetailResponseDataType} from '../../types/apiResponseTypes';
import {Button, Text, View} from 'react-native';
import SingleLessonList from './SingleLessonList';
import {sharedStyles} from '../../styles/sharedStyles';
import Spacer from '../../components/Spacer';
import {bgTop} from '../../utils/appColors';

const LessonWidget = ({data}: {data?: LessonDetailResponseDataType[]}) => {
	const [selectedLesson, setSelectedLesson] = useState(0);
	if (!data) {
		return <></>;
	}

	const changeLesson = () => {
		if (data[selectedLesson + 1]) {
			setSelectedLesson(selectedLesson + 1);
		} else {
			setSelectedLesson(0);
		}
	};

	const currentLesson = data[selectedLesson];

	return (
		<View style={sharedStyles.flexOne}>
			<Text style={sharedStyles.centerAlignedText}>
				{`title: ${currentLesson.title}`}
			</Text>
			<Text style={sharedStyles.centerAlignedText}>
				{currentLesson.longDescription}
			</Text>
			<Spacer vertical />
			<View style={sharedStyles.flexOne}>
				<SingleLessonList data={currentLesson.widgets} />
			</View>
			{data.length > 1 && (
				<Button title={'Next'} onPress={() => changeLesson()} color={bgTop} />
			)}
		</View>
	);
};

export default LessonWidget;
