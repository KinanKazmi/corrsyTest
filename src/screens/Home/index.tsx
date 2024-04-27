import React from 'react';
import {useColorScheme} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {changeName} from '../../redux/corrsyReducer';
import {useFetchSubjectsQuery} from '../../apis/rtkQuery';
import {USER_ID as userId, GRADE_ID as gradeId} from '@env';
import HomeUI from './HomeUI';

const Home = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const dispatch = useDispatch();
	const stateData = useSelector((state: RootState) => state.corrsyReducer);
	const {data} = useFetchSubjectsQuery({
		userId,
		gradeId,
	});
	console.log('namedata', stateData);
	console.log('data', data);

	const changeUserName = (name: string) => {
		dispatch(changeName(name));
	};

	return (
		<HomeUI
			isDarkMode={isDarkMode}
			userName={stateData.nameObj.name}
			changeUserName={changeUserName}
		/>
	);
};

export default Home;
