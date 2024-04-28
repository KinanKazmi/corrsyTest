import React from 'react';
import {View, FlatList} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import LessonBox from './LessonBox';
import {LessonType} from '../../types/apiResponseTypes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/routes';

const LessonsList = ({data}: {data: LessonType[]}) => {
	const stateData = useSelector((state: RootState) => state.corrsyReducer);
	const navigation =
		useNavigation<
			NativeStackNavigationProp<RootStackParamList, 'LessonSeries'>
		>();

	const onLessonPress = (item: LessonType) => {
		navigation.navigate('LessonSeries', {lessonId: item._id});
	};

	return (
		<View style={sharedStyles.flexOne}>
			<FlatList
				contentContainerStyle={sharedStyles.listView}
				numColumns={2}
				data={data}
				keyExtractor={item => item._id}
				extraData={stateData.locale}
				renderItem={({item}) => (
					<LessonBox item={item} onPress={() => onLessonPress(item)} />
				)}
			/>
		</View>
	);
};

export default LessonsList;
