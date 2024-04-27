import React from 'react';
import {View, FlatList} from 'react-native';
import {
	ChaptersResponseArrayType,
	ChapterType,
	LessonType,
} from '../../types/apiResponseTypes';
import ChapterBox from './ChapterBox';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {sharedStyles} from '../../styles/sharedStyles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/routes';

const ChaptersList = ({data}: {data?: ChaptersResponseArrayType[]}) => {
	const stateData = useSelector((state: RootState) => state.corrsyReducer);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList, 'Chapters'>>();

	if (!data) {
		return <></>;
	}

	const chapters: ChapterType[] = [];
	data.forEach(item => item.chapter.forEach(chap => chapters.push(chap)));
	const lessons: LessonType[] = [];
	data.forEach(item => item.lessons.forEach(lesson => lessons.push(lesson)));

	const onChapterPress = () => {
		navigation.navigate('Lessons', {lessons: lessons});
	};

	return (
		<View style={sharedStyles.flexOne}>
			<FlatList
				contentContainerStyle={sharedStyles.listView}
				horizontal={true}
				data={chapters}
				keyExtractor={(item, index) => index.toString()}
				extraData={stateData.locale}
				renderItem={({item}) => (
					<ChapterBox item={item} onPress={() => onChapterPress()} />
				)}
			/>
		</View>
	);
};

export default ChaptersList;
