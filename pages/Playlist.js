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
import mePlay from "../icons/icon-pack/mePlay";

import { AppConsumer } from "../AppContextProvider";

const HEADER_EXPANDED_HEIGHT = 340;
const HEADER_COLLAPSED_HEIGHT = 0;

export default class Playlist extends Component {
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
              marginBottom: 55,
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
                    <MeIcon size={20} color={"#fff"} icon={mePlay} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: 50, alignItems: "center" }}
                    onPress={() => this.onShare()}
                  >
                    <MeIcon size={20} color={"#fff"} icon={meArrowLeft} />
                  </TouchableOpacity>
                </View>
              }
              titleComponent={
                <View style={{ paddingLeft: 50 }}>
                  <Text
                    style={[{ fontSize: 18, color: "#fff" }, textStyle.bold]}
                  >
                    Danh sách phát
                  </Text>
                </View>
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
                    elevation:100,
                  }}
                  cardElevation={3}
                  cornerRadius={32.5}
                >
                  <MeIcon size={20} color="#fff" icon={meArrowRight} />
                </CardView>
              </View>
              <View
                style={{
                  position:"absolute",
                  bottom:-200,
                  width:"100%",
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
                  paddingHorizontal:12,
                  minHeight:
                  Dimensions.get("window").height - 50 - 115 - getStatusBarHeight(),
                  backgroundColor: appConsumer.theme.backgroundColorPrimary,
                }}
              >
                <SongItem
                  idx={1}
                  name="Duyên Âm"
                  actorName="Hoàng Thùy Linh ft Binz"
                />
                <SongItem
                  idx={2}
                  name="Duyên Dương"
                  actorName="Hoàng Thùy Linh"
                />
                <SongItem
                  idx={3}
                  name="Duyên Âm"
                  actorName="Hoàng Thùy Linh ft Binz"
                />
                <SongItem
                  idx={3}
                  name="Duyên Âm"
                  actorName="Hoàng Thùy Linh ft Binz"
                />
                <SongItem
                  idx={3}
                  name="Duyên Âm"
                  actorName="Hoàng Thùy Linh ft Binz"
                />
                <SongItem
                  idx={3}
                  name="Duyên Âm"
                  actorName="Hoàng Thùy Linh ft Binz"
                />
              </View>
            </ScrollView>
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
