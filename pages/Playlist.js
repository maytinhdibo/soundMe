import React, { Component } from "react";
import {
  Text,
  View,
  Share,
  Animated,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { textStyle } from "../styles/textStyle";
import CardView from "react-native-cardview";
import SongItem from "../components/playlist/SongItem";
import Header from "../components/common/Header";

import { getStatusBarHeight } from "react-native-status-bar-height";

import MeIcon from "../icons/MeIcon";
import meArrowRight from "../icons/icon-pack/meArrowRight";
import meArrowLeft from "../icons/icon-pack/meArrowLeft";
import meShare from "../icons/icon-pack/meShare";
import mePlay from "../icons/icon-pack/mePlay";
import meHeart from "../icons/icon-pack/meHeart";

import { AppConsumer } from "../AppContextProvider";
import { withNavigation } from "react-navigation";
import PlayerBar from "../components/player/PlayerBar";
const HEADER_EXPANDED_HEIGHT = 270;
const HEADER_COLLAPSED_HEIGHT = 0;

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  async componentDidMount() {
    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
        StatusBar.setBarStyle("dark-content");
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      payload => {
        StatusBar.setBarStyle("light-content");
      }
    );
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Lắng nghe Hoàng - Hoàng Thùy Linh tại soundMe. https://youtu.be/kkz6U59y8Hg",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, 0],
      extrapolate: "clamp",
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const headerTitle = "HEADER";
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.backgroundColorPlaylist,
            }}
          >
            <Header
              leftComponent={
                <TouchableOpacity
                  style={{ width: 50, alignItems: "center" }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <MeIcon size={20} color={"#fff"} icon={meArrowLeft} />
                </TouchableOpacity>
              }
              rightComponent={
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={{ width: 50, alignItems: "center" }}>
                    <MeIcon size={20} color={"#fff"} icon={meHeart} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: 50, alignItems: "center" }}
                    onPress={() => this.onShare()}
                  >
                    <MeIcon size={20} color={"#fff"} icon={meShare} />
                  </TouchableOpacity>
                </View>
              }
              titleComponent={
                <Animated.View
                  style={{ paddingLeft: 50, opacity: headerTitleOpacity }}
                >
                  <Text
                    style={[{ fontSize: 18, color: "#fff" }, textStyle.bold]}
                  >
                    Hoàng
                  </Text>
                </Animated.View>
              }
              color={appConsumer.theme.colorPrimary}
              style={{ backgroundColor: "#453" }}
            />

            <Animated.View
              style={[
                styles.header,
                { height: headerHeight, opacity: heroTitleOpacity },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={[{ fontSize: 32, color: "#fff" }, textStyle.bold]}>
                  Hoàng
                </Text>
                <Text
                  style={[{ fontSize: 20, color: "#fff" }, textStyle.regular]}
                >
                  Hoàng Thùy Linh
                </Text>
                <CardView
                  style={{
                    marginTop: 12,
                    height: 220,
                    width: 220,
                  }}
                  cardElevation={2}
                  cornerRadius={32}
                >
                  <Image
                    source={{
                      uri:
                        "https://i.scdn.co/image/7be436d24a08969d8724edc8c0e290a4b5624fff",
                    }}
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </CardView>
                <CardView
                  style={{
                    position: "absolute",
                    width: 65,
                    height: 65,
                    backgroundColor: appConsumer.theme.buttonColor,
                    bottom: -32.5,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 100,
                  }}
                  cardElevation={3}
                  cornerRadius={32.5}
                >
                  <MeIcon size={20} color="#fff" icon={mePlay} />
                </CardView>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -250,
                  width: "100%",
                  backgroundColor: appConsumer.theme.backgroundColorPrimary,
                  height: 300,
                  borderTopLeftRadius: 36,
                  borderTopRightRadius: 36,
                }}
              ></View>
            </Animated.View>

            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY,
                    },
                  },
                },
              ])}
              scrollEventThrottle={16}
            >
              <View
                style={{
                  minHeight:
                    Dimensions.get("window").height -
                    35 -
                    getStatusBarHeight(),
                }}
              >
                         <TouchableOpacity
                  onPress={() => {
                    alert("ahihi");
                  }}
                >
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      // backgroundColor: "rgba(1,1,1,0.2)",
                      marginBottom: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                    cardElevation={3}
                    cornerRadius={32.5}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    paddingHorizontal: 12,
                    flex: 1,
                    backgroundColor: appConsumer.theme.backgroundColorPrimary,
                  }}
                >
                  <SongItem
                    idx={1}
                    time={124}
                    name="Duyên Âm"
                    actorName="Hoàng Thùy Linh ft Binz"
                  />
                  <SongItem
                    idx={2}
                    time={215}
                    name="Duyên Dương"
                    actorName="Hoàng Thùy Linh"
                  />
                  <SongItem
                    idx={3}
                    time={213}
                    name="Duyên Âm"
                    actorName="Hoàng Thùy Linh ft Binz"
                  />
                  <SongItem
                    idx={3}
                    time={321}
                    name="Duyên Âm"
                    actorName="Hoàng Thùy Linh ft Binz"
                  />
                  <SongItem
                    idx={3}
                    time={323}
                    name="Duyên Âm"
                    actorName="Hoàng Thùy Linh ft Binz"
                  />
                  <SongItem
                    idx={3}
                    time={134}
                    name="Duyên Âm"
                    actorName="Hoàng Thùy Linh ft Binz"
                  />
                </View>
              </View>
            </ScrollView>
            <PlayerBar/>
          </View>
          
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT,
    elevation: -1,
    zIndex: -3,
  },
  header: {
    position: "absolute",
    width: "100%",
    top: 50 + getStatusBarHeight(),
    left: 0,
    zIndex: 0,
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default (Playlist);