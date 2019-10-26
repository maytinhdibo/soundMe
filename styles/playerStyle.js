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
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  nowPlaying: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  coverImage: {
    alignSelf: "center",
    height: Math.round(Dimensions.get("window").width) * 0.7,
    width: "70%",
    resizeMode: "cover",
    borderRadius: 27
  },
  songName: {
    color: "#fff",
    fontSize: 20,
    padding: 12,
    paddingBottom: 3,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  artistName: {
    color: "#fff",
    fontSize: 16, 
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
  
});
