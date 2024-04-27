import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	useColorScheme,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {changeName} from '../../redux/corrsyReducer';
import {useFetchSubjectsQuery} from '../../apis/rtkQuery';
import {USER_ID as userId, GRADE_ID as gradeId} from '@env';
import HomeUI from './HomeUI';
import FullScreenLoader from '../../components/FullScreenLoader';
import ErrorView from '../../components/ErrorView';

const Home = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const dispatch = useDispatch();
	const stateData = useSelector((state: RootState) => state.corrsyReducer);
	const {data, isLoading, error} = useFetchSubjectsQuery({
		userId,
		gradeId,
	});
	console.log('namedata', stateData);
	console.log('data', data);

	const changeUserName = (name: string) => {
		dispatch(changeName(name));
	};

	return (
		<SafeAreaView style={styles.sectionContainer}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<FullScreenLoader loading={isLoading} />
			{error ? (
				<ErrorView error={error} />
			) : (
				<HomeUI
					isDarkMode={isDarkMode}
					userName={stateData.nameObj.name}
					changeUserName={changeUserName}
					error={error}
				/>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Home;
