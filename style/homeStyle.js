import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    listItem: {
        backgroundColor: "red",
        width: "30%", 
        borderRadius: 20,
        height: 150,
        padding: 9,
        flex: 1, 
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    slideShow:{
        height: 275
    }
});