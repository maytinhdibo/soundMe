import { StyleSheet } from "react-native";

export const searchStyle = StyleSheet.create({
  songItem: {
    // flex: 1,
    flexDirection: "row",
    // backgroundColor: '#fff',
    marginBottom: 12,
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
  albumItem: {
    flex:1,
    padding:6,
    height:77,
    flexDirection: "row",
    marginEnd:6,
    // backgroundColor: '#fff',
    alignContent: "center",
    backgroundColor:"#eee",
    borderRadius:9,
  }
});
