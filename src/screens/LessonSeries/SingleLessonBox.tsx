import React from 'react';
import {LessonWidgetDataType} from '../../types/apiResponseTypes';
import TextImage from '../../components/Widgets/TextImage';
import Video from '../../components/Widgets/Video';
import MultipleChoice from '../../components/Widgets/MultipleChoice';
import {widgetType} from '../../utils/data';

const SingleLessonBox = ({item}: {item: LessonWidgetDataType}) => {
	console.log('data', item);
	if (item.widgetType === widgetType.textAndImages) {
		return <TextImage data={item.content} />;
	}
	if (item.widgetType === widgetType.video) {
		return <Video data={item.videoWidgetContent} />;
	}
	if (item.widgetType === widgetType.multipleChoice) {
		return <MultipleChoice data={item.mcqWidgetContent} />;
	}
};

export default SingleLessonBox;
