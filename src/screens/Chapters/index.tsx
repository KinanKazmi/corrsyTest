import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	useColorScheme,
} from 'react-native';
import {useFetchChaptersQuery} from '../../apis/rtkQuery';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/routes';
import LinearGradient from 'react-native-linear-gradient';
import ErrorView from '../../components/ErrorView';
import FullScreenLoader from '../../components/FullScreenLoader';
import {bgTop, bgBottom} from '../../utils/appColors';
import ChaptersList from './ChaptersList';

const Chapters = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const route = useRoute<RouteProp<RootStackParamList, 'Chapters'>>();
	const {subjectId} = route.params;
	const {data, isLoading, error} = useFetchChaptersQuery({subjectId});

	return (
		<LinearGradient colors={[bgTop, bgBottom]} style={styles.fullView}>
			<SafeAreaView style={styles.fullView}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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

const styles = StyleSheet.create({
	fullView: {
		flex: 1,
	},
});

export default Chapters;
