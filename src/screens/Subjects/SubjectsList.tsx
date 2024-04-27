import React from 'react';
import {View, FlatList} from 'react-native';
import SubjectBox from './SubjectBox';
import {SubjectResponseArrayType} from '../../types/apiResponseTypes';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {sharedStyles} from '../../styles/sharedStyles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/routes';

const SubjectsList = ({data}: {data?: SubjectResponseArrayType[]}) => {
	const stateData = useSelector((state: RootState) => state.corrsyReducer);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList, 'Subjects'>>();

	if (!data) {
		return <></>;
	}

	const openChapters = (subjectId: string) => {
		navigation.navigate('Chapters', {subjectId: subjectId});
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
					<SubjectBox
						item={item}
						onPress={() => openChapters(item.subject._id)}
					/>
				)}
			/>
		</View>
	);
};

export default SubjectsList;
