import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useFetchLessonQuery} from '../../apis/api';
import ErrorView from '../../components/ErrorView';
import {RootStackParamList} from '../../routes/routes';
import FullScreenLoader from '../../components/FullScreenLoader';
import LessonWidget from './LessonWidget';
import {sharedStyles} from '../../styles/sharedStyles';
import {bgTop, bgBottom} from '../../utils/appColors';

const LessonSeries = () => {
	const route = useRoute<RouteProp<RootStackParamList, 'LessonSeries'>>();
	const {lessonId} = route.params;
	const {data, isLoading, error} = useFetchLessonQuery({lessonId});

	return (
		<LinearGradient colors={[bgTop, bgBottom]} style={sharedStyles.flexOne}>
			<SafeAreaView style={sharedStyles.flexOne}>
				<FullScreenLoader loading={isLoading} />
				{error ? (
					<ErrorView error={error} />
				) : (
					<LessonWidget data={data?.data} />
				)}
			</SafeAreaView>
		</LinearGradient>
	);
};

export default LessonSeries;
