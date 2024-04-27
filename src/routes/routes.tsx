import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LocaleSwitcher from '../components/LocaleSwitcher';
import Subjects from '../screens/Subjects';
import Chapters from '../screens/Chapters';
import Lessons from '../screens/Lessons';
import {LessonType} from '../types/apiResponseTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const routes = (
	<Stack.Navigator
		initialRouteName={'Subjects'}
		screenOptions={{headerRight: () => <LocaleSwitcher />}}>
		<Stack.Screen name="Subjects" component={Subjects} />
		<Stack.Screen name="Chapters" component={Chapters} />
		<Stack.Screen name="Lessons" component={Lessons} />
	</Stack.Navigator>
);

export type RootStackParamList = {
	Subjects: undefined;
	Chapters: {subjectId: string};
	Lessons: {lessons: LessonType[]};
};
