import I18n from 'react-native-i18n';
// import {Platform, NativeModules} from 'react-native';

I18n.fallbacks = true;
I18n.translations = {
	en: require('./en.json'),
	ar: require('./ar.json'),
};

I18n.locale = 'ar';

// I18n.locale =
// 	Platform.OS === 'ios'
// 		? NativeModules.SettingsManager.settings.AppleLocale
// 		: NativeModules.I18nManager.localeIdentifier;
