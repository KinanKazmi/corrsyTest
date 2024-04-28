import React, {useState} from 'react';
import {LessonDetailResponseDataType} from '../../types/apiResponseTypes';
import {Button, Text, View} from 'react-native';
import SingleLessonList from './SingleLessonList';
import {sharedStyles} from '../../styles/sharedStyles';
import Spacer from '../../components/Spacer';

const LessonWidget = ({data}: {data?: LessonDetailResponseDataType[]}) => {
	const [selectedLesson, setSelectedLesson] = useState(0);
	const currentLesson = data && data[selectedLesson];
	const lessonId = currentLesson?._id || '';

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

	return (
		<View style={sharedStyles.flexOne}>
			<Text style={sharedStyles.centerAlignedText}>
				{`title: ${currentLesson?.title}`}
			</Text>
			<Text style={sharedStyles.centerAlignedText}>
				{currentLesson?.longDescription}
			</Text>
			<Spacer vertical />
			<View style={sharedStyles.flexOne}>
				<SingleLessonList data={currentLesson?.widgets} lessonId={lessonId} />
			</View>
			{data.length > 1 && (
				<Button title={'Next'} onPress={() => changeLesson()} />
			)}
		</View>
	);
};

export default LessonWidget;
