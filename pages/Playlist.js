import React, { Component } from "react";
import {
  Text,
  View,
  Share,
  Animated,
  ScrollView,
  TouchableOpacity,
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

const HEADER_EXPANDED_HEIGHT = 300;
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
              position: "relative",
              backgroundColor: appConsumer.theme.backgroundColorPlaylist,
            }}
          >
            <Header
              leftComponent={
                <TouchableOpacity
                  style={{ width: 50, alignItems: "center" }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <MeIcon
                    size={20}
                    color={appConsumer.theme.colorPrimary}
                    icon={meArrowLeft}
                  />
                </TouchableOpacity>
              }
              rightComponent={
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={{ width: 50, alignItems: "center" }}>
                    <MeIcon
                      size={20}
                      color={appConsumer.theme.colorPrimary}
                      icon={mePlay}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: 50, alignItems: "center" }}
                    onPress={() => this.onShare()}
                  >
                    <MeIcon
                      size={20}
                      color={appConsumer.theme.colorPrimary}
                      icon={meArrowLeft}
                    />
                  </TouchableOpacity>
                </View>
              }
              titleComponent={
                <View style={{ paddingLeft: 50 }}>
                  <Text
                    style={[
                      { fontSize: 18, color: appConsumer.theme.colorPrimary },
                      textStyle.bold,
                    ]}
                  >
                    Danh sách phát
                  </Text>
                </View>
              }
              color={appConsumer.theme.colorPrimary}
              style={{ backgroundColor: "#453" }}
            />
            {/* <Animated.View
              style={[
                {
                  // position: "absolute",
                  paddingTop: 9,
                  alignSelf: "center",
                  zIndex: 10,
                  backgroundColor: "#221",
                  overflow:"hidden"
                },
                { height: headerHeight },
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
                    zIndex: -1,
                  }}
                  cardElevation={10}
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
                  }}
                  cardElevation={16}
                  cornerRadius={32.5}
                >
                  <MeIcon size={20} color="#fff" icon={meArrowRight} />
                </CardView>
              </View>

            </Animated.View> */}

            <Animated.View
              style={[
                {
                  backgroundColor: "lightblue",
                  position: "absolute",
                  width: Dimensions.get("window").width,
                  top: 50 + getStatusBarHeight(),
                  left: 0,
                  zIndex: 9999,
                },
                { height: headerHeight },
              ]}
            >
              <Text>Header</Text>
            </Animated.View>
            <ScrollView
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY,
                    },
                  },
                },
              ])}
              scrollEventThrottle={0}
              style={{
                flex: 1,
                // padding: 9,
                paddingTop: HEADER_EXPANDED_HEIGHT,
                height: Dimensions.get("window").width,
                // borderRadius:12,
                // elevation: 100,
                // borderTopLeftRadius: 36,
                // borderTopRightRadius: 36,
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
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
            </ScrollView>
          </View>
        )}
      </AppConsumer>
    );
  }
}
