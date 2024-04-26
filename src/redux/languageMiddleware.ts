import I18n from 'react-native-i18n';
import {Middleware} from '@reduxjs/toolkit';

const languageMiddleware: Middleware = () => next => action => {
	if (
		action &&
		typeof action === 'object' &&
		'type' in action &&
		'payload' in action
	) {
		if (action.type === 'corrsy/changeLocale') {
			I18n.locale = action.payload as string;
		}
	}
	return next(action);
};

export default languageMiddleware;
