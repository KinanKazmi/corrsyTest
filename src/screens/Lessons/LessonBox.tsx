import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {LessonType} from '../../types/apiResponseTypes';
import I18n from 'i18n-js';
import LinearGradient from 'react-native-linear-gradient';
import {sharedStyles} from '../../styles/sharedStyles';
import {lessonButtonTop, lessonButtonBottom} from '../../utils/appColors';
import {useMMKVString} from 'react-native-mmkv';

const LessonBox = ({
	item,
	onPress,
}: {
	item: LessonType;
	onPress: () => void;
}) => {
	const [lessonProgress] = useMMKVString(item._id);

	const title = I18n.t(`${item.title}`);
	const level = I18n.t(`${item.level}`);
	return (
		<TouchableOpacity onPress={() => onPress()}>
			<LinearGradient
				colors={[lessonButtonTop, lessonButtonBottom]}
				style={[sharedStyles.listItemContainer, sharedStyles.flexColumn]}>
				<Text style={sharedStyles.centerAlignedText}>
					{`${title}\n\n${level}\n\n`}
				</Text>
				<Text style={sharedStyles.centerAlignedText}>
					{lessonProgress &&
						`Progress screen: ${parseInt(lessonProgress, 10) + 1}`}
				</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default LessonBox;
