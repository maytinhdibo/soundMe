import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const playerStyle = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: getStatusBarHeight()
  },
  overlay: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  nowPlaying: {
    alignSelf: "center",
    color: "#444",
    fontSize: 18,
  },
  coverImage: {
    alignSelf: "center",
    height: Math.round(Dimensions.get("window").width) * 0.65,
    width: "65%",
    // resizeMode: "cover",
    // borderRadius: 27
  },
  songName: {
    color: "#444",
    fontSize: 20,
    padding: 6,
    
  },
  artistName: {
    color: "#444",
    fontSize: 16, 
    paddingBottom: 19,
  }
  
});
