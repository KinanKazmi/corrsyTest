import React from 'react';
import {Button, Text, View} from 'react-native';
import I18n from 'react-native-i18n';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {changeName} from '../../redux/corrsyReducer';

const Home = () => {
	const nameData = useSelector(
		(state: RootState) => state.corrsyReducer.nameObj,
	);
	const dispatch = useDispatch();
	console.log(nameData);
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
