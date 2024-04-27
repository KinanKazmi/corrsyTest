import React from 'react';
import {View, FlatList} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import LessonBox from './LessonBox';
import {LessonType} from '../../types/apiResponseTypes';

const LessonsList = ({data}: {data: LessonType[]}) => {
	const stateData = useSelector((state: RootState) => state.corrsyReducer);

	const onLessonPress = (item: LessonType) => {
		console.log('lesson pressed', item);
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
