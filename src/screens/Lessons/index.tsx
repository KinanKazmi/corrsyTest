import React from 'react';
import {SafeAreaView} from 'react-native';
import {sharedStyles} from '../../styles/sharedStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/routes';
import LinearGradient from 'react-native-linear-gradient';
import {bgTop, bgBottom} from '../../utils/appColors';
import LessonsList from './LessonsList';

const Lessons = () => {
	const route = useRoute<RouteProp<RootStackParamList, 'Lessons'>>();
	const {lessons} = route.params;
	return (
		<LinearGradient colors={[bgTop, bgBottom]} style={sharedStyles.flexOne}>
			<SafeAreaView style={sharedStyles.flexOne}>
				<LessonsList data={lessons} />
			</SafeAreaView>
		</LinearGradient>
	);
};

export default Lessons;
