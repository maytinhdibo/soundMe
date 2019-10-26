import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    slideShow: {
        height: 230,
        overflow: "visible",
        // backgroundColor:"#443"
    },
    sectionTitle: {
        fontSize: 20,
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
    playlistItem: {
        flex: 1,
        // backgroundColor: '#fff',
        margin: 12,
        marginEnd: 0,
        width: 150,
        alignContent: "center",
        textAlign: "center",
        // overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    songItem: {
        flex: 1,
        flexDirection:"row",
        // backgroundColor: '#fff',
        margin: 12,
        alignContent: "center",
        textAlign: "center",
        // overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    }
});