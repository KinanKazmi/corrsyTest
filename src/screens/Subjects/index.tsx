import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFetchSubjectsQuery} from '../../apis/api';
import {USER_ID as userId, GRADE_ID as gradeId} from '@env';
import FullScreenLoader from '../../components/FullScreenLoader';
import ErrorView from '../../components/ErrorView';
import {bgTop, bgBottom} from '../../utils/appColors';
import SubjectsList from './SubjectsList';
import {sharedStyles} from '../../styles/sharedStyles';

const Subjects = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const {data, isLoading, error} = useFetchSubjectsQuery({
		userId,
		gradeId,
	});

	return (
		<LinearGradient colors={[bgTop, bgBottom]} style={sharedStyles.flexOne}>
			<SafeAreaView style={sharedStyles.flexOne}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<FullScreenLoader loading={isLoading} />
				{error ? (
					<ErrorView error={error} />
				) : (
					<SubjectsList data={data?.data} />
				)}
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Subjects;
