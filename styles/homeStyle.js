import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    slideShow: {
        height: 275
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#345",
        padding: 16,
        paddingLeft: 12
    },
    listItem: {
        backgroundColor: "red",
        width: "30%",
        borderRadius: 20,
        height: 190,
        padding: 9,
        flex: 1,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    songItem: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 12,
        marginEnd: 0,
        width: 120,
        alignContent: "center",
        textAlign: "center",
        borderRadius: 5,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    }
});