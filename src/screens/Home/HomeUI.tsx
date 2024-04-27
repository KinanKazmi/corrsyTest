import React from 'react';
import {Button, Text} from 'react-native';
import I18n from 'react-native-i18n';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

const HomeUI = ({
	changeUserName,
	userName,
}: {
	isDarkMode: boolean;
	userName: string;
	changeUserName: (name: string) => void;
	error?: FetchBaseQueryError | unknown;
}) => {
	return (
		<>
			<LocaleSwitcher />
			<Text>{I18n.t('greeting', {name: userName})}</Text>
			<Button title="dispatch" onPress={() => changeUserName('New Kaz')} />
		</>
	);
};

export default HomeUI;
