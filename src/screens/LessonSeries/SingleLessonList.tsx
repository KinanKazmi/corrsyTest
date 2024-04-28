import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {LessonWidgetDataType} from '../../types/apiResponseTypes';
import SingleLessonBox from './SingleLessonBox';
import Spacer from '../../components/Spacer';
import * as Progress from 'react-native-progress';
import {useMMKVString} from 'react-native-mmkv';

const SingleLessonList = ({
	data,
	lessonId,
}: {
	data?: LessonWidgetDataType[];
	lessonId: string;
}) => {
	const [lessonProgress, setLessonProgress] = useMMKVString(lessonId);
	const [selectedWidget, setSelectedWidget] = useState(
		parseInt(lessonProgress || '0', 10),
	);

	if (!data) {
		return <></>;
	}

	const changeWidget = () => {
		if (data[selectedWidget + 1]) {
			setSelectedWidget(selectedWidget + 1);
			setLessonProgress((selectedWidget + 1).toString());
		} else {
			setSelectedWidget(0);
			setLessonProgress('0');
		}
	};

	const current = selectedWidget + 1;
	const total = data.length;
	const progress = current / total;

	return (
		<View style={sharedStyles.flexOne}>
			{total > 1 && data.length > 1 && (
				<Text style={sharedStyles.centerAlignedText}>
					{`Progress ${current}/${total}`}
				</Text>
			)}
			<View style={sharedStyles.alignCenter}>
				<Progress.Bar useNativeDriver width={200} progress={progress} />
			</View>
			<Spacer vertical />
			<SingleLessonBox item={data[selectedWidget]} />
			{data.length > 1 && (
				<Button title={'Next'} onPress={() => changeWidget()} />
			)}
		</View>
	);
};

export default SingleLessonList;
