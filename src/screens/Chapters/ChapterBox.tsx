import React from 'react';
import I18n from 'react-native-i18n';
import {Image, Text, TouchableOpacity} from 'react-native';
import {ChapterType} from '../../types/apiResponseTypes';
import LinearGradient from 'react-native-linear-gradient';
import {chapterButtonTop, chapterButtonBottom} from '../../utils/appColors';
import {sharedStyles} from '../../styles/sharedStyles';

const ChapterBox = ({
	item,
	onPress,
}: {
	item: ChapterType;
	onPress: () => void;
}) => {
	return (
		<TouchableOpacity onPress={() => onPress()}>
			<LinearGradient
				colors={[chapterButtonTop, chapterButtonBottom]}
				style={sharedStyles.listItemContainer}>
				<Image
					style={sharedStyles.listItemIcon}
					source={{uri: item.chapter_icon}}
				/>
				<Text>{I18n.t(`${item.chapter_name}`)}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default ChapterBox;
