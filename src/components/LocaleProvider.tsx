import React, {ReactNode, useEffect} from 'react';
import {useSelector} from 'react-redux';
import I18n from 'react-native-i18n';
import {RootState} from '../redux/store';

const LocaleProvider = ({children}: {children: ReactNode}) => {
	const stateData = useSelector((state: RootState) => state.corrsyReducer);

	useEffect(() => {
		I18n.locale = stateData.locale;
	}, [stateData, stateData.locale]);

	return <>{children}</>;
};

export default LocaleProvider;
