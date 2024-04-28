import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {LessonWidgetDataType} from '../../types/apiResponseTypes';
import SingleLessonBox from './SingleLessonBox';
import Spacer from '../../components/Spacer';
import * as Progress from 'react-native-progress';
import {bgTop} from '../../utils/appColors';

const SingleLessonList = ({data}: {data: LessonWidgetDataType[]}) => {
	const [selectedWidget, setSelectedWidget] = useState(0);

	const changeWidget = () => {
		if (data[selectedWidget + 1]) {
			setSelectedWidget(selectedWidget + 1);
		} else {
			setSelectedWidget(0);
		}
	};

	const current = selectedWidget + 1;
	const total = data.length;
	const progress = current / total;

	return (
		<View style={sharedStyles.flexOne}>
			{total > 1 && (
				<Text style={sharedStyles.centerAlignedText}>
					{`Progress ${current}/${total}`}
				</Text>
			)}
			<View style={sharedStyles.alignCenter}>
				<Progress.Bar useNativeDriver width={200} progress={progress} />
			</View>
			<Spacer vertical />
			<SingleLessonBox item={data[selectedWidget]} />
			<Button title={'Next'} onPress={() => changeWidget()} color={bgTop} />
		</View>
	);
};

export default SingleLessonList;
