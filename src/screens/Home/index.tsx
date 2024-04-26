import React from 'react';
import {Button, Text, View} from 'react-native';
import I18n from 'react-native-i18n';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {changeName} from '../../redux/corrsyReducer';
import {useFetchSubjectsQuery} from '../../apis/rtkQuery';

const Home = () => {
	const nameData = useSelector(
		(state: RootState) => state.corrsyReducer.nameObj,
	);
	const dispatch = useDispatch();
	const {data} = useFetchSubjectsQuery({
		userId: '65edc62cc1aa0078000f9c01',
		gradeId: '6625514923f87505231c8f89',
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkYzYyY2MxYWEwMDc4MDAwZjljMDEiLCJpYXQiOjE3MTM3MzQxOTh9.2ZIPdqfGIEbm0t6iSE14HTQw1ASehe_hijG_iEnWFJU',
	});
	console.log('data', data);
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
