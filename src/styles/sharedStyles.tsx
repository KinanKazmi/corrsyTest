import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
	flexOne: {
		flex: 1,
	},
	alignCenter: {
		alignItems: 'center',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	flexColumn: {
		flexDirection: 'column',
	},
	basicMargin: {
		padding: 20,
	},
	listView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 50,
	},
	listItemContainer: {
		width: 140,
		minHeight: 70,
		maxHeight: 140,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		marginHorizontal: 20,
		borderRadius: 5,
	},
	listItemIcon: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		marginRight: 5,
	},
	centerAlignedText: {
		textAlign: 'center',
	},
});
