import React from 'react';
import {SafeAreaView} from 'react-native';
import {useFetchChaptersQuery} from '../../apis/api';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/routes';
import LinearGradient from 'react-native-linear-gradient';
import ErrorView from '../../components/ErrorView';
import FullScreenLoader from '../../components/FullScreenLoader';
import {bgTop, bgBottom} from '../../utils/appColors';
import ChaptersList from './ChaptersList';
import {sharedStyles} from '../../styles/sharedStyles';

const Chapters = () => {
	const route = useRoute<RouteProp<RootStackParamList, 'Chapters'>>();
	const {subjectId} = route.params;
	const {data, isLoading, error} = useFetchChaptersQuery({subjectId});

	return (
		<LinearGradient colors={[bgTop, bgBottom]} style={sharedStyles.flexOne}>
			<SafeAreaView style={sharedStyles.flexOne}>
				<FullScreenLoader loading={isLoading} />
				{error ? (
					<ErrorView error={error} />
				) : (
					<ChaptersList data={data?.data} />
				)}
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Chapters;
