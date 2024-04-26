import React from 'react';
import {Button, Text, View} from 'react-native';
import I18n from 'react-native-i18n';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {changeName} from '../../redux/corrsyReducer';
import {useFetchSubjectsQuery} from '../../apis/rtkQuery';
import {USER_ID as userId, GRADE_ID as gradeId} from '@env';

const Home = () => {
	const nameData = useSelector(
		(state: RootState) => state.corrsyReducer.nameObj,
	);
	const dispatch = useDispatch();
	const {data} = useFetchSubjectsQuery({
		userId,
		gradeId,
	});
	console.log('data', data);
	console.log('namedata', nameData);
	return (
		<View>
			<Text>{I18n.t('greeting', {name: nameData.name})}</Text>
			<Button
				title="dispatch"
				onPress={() => dispatch(changeName('New Kaz'))}
			/>
		</View>
	);
};

export default Home;
