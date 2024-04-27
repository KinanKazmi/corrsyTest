import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import I18n from 'react-native-i18n';
import {SubjectResponseArrayType} from '../../types/apiResponseTypes';
import LinearGradient from 'react-native-linear-gradient';
import {subjectButtonBottom, subjectButtonTop} from '../../utils/appColors';
import {sharedStyles} from '../../styles/sharedStyles';

const SubjectBox = ({
	item,
	onPress,
}: {
	item: SubjectResponseArrayType;
	onPress: () => void;
}) => {
	return (
		<TouchableOpacity onPress={() => onPress()}>
			<LinearGradient
				colors={[subjectButtonTop, subjectButtonBottom]}
				style={sharedStyles.listItemContainer}>
				<Image
					style={sharedStyles.listItemIcon}
					source={{uri: item.subject.subject_icon}}
				/>
				<Text>{I18n.t(`${item.subject.Subject_name}`)}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default SubjectBox;
