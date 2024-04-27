import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
	en: require('./en.json'),
	ar: require('./ar.json'),
};

I18n.locale = 'en';

// To select phone locale on startup
// I18n.locale =
// 	Platform.OS === 'ios'
// 		? NativeModules.SettingsManager.settings.AppleLocale
// 		: NativeModules.I18nManager.localeIdentifier;
