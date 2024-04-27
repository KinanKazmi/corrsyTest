import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {LessonType} from '../../types/apiResponseTypes';
import I18n from 'i18n-js';
import LinearGradient from 'react-native-linear-gradient';
import {sharedStyles} from '../../styles/sharedStyles';
import {lessonButtonTop, lessonButtonBottom} from '../../utils/appColors';

const LessonBox = ({
	item,
	onPress,
}: {
	item: LessonType;
	onPress: () => void;
}) => {
	const title = I18n.t(`${item.title}`);
	const level = I18n.t(`${item.level}`);
	const desc = I18n.t(`${item.shortDescription}`);
	return (
		<TouchableOpacity onPress={() => onPress()}>
			<LinearGradient
				colors={[lessonButtonTop, lessonButtonBottom]}
				style={[sharedStyles.listItemContainer, sharedStyles.flexColumn]}>
				<Text style={sharedStyles.centerAlignedText}>
					{`${title}\n${level}\n${desc}`}
				</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default LessonBox;
