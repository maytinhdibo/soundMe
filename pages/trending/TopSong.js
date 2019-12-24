import React, { Component } from "react";
import {
  Text,
  View,
  Share,
  Animated,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";
import SongItem from "../../components/trending/SongItem";
import Header from "../../components/common/Header";

import { getStatusBarHeight } from "react-native-status-bar-height";

import MeIcon from "../../icons/MeIcon";
import meArrowRight from "../../icons/icon-pack/meArrowRight";
import meArrowLeft from "../../icons/icon-pack/meArrowLeft";
import meShare from "../../icons/icon-pack/meShare";
import mePlay from "../../icons/icon-pack/mePlay";
import meHeart from "../../icons/icon-pack/meHeart";
import meHeartFill from "../../icons/icon-pack/meHeartFill"
import topmusic from "../../assets/data/topmusic"

import { AppConsumer, ThemeContext } from "../../AppContextProvider";

const HEADER_EXPANDED_HEIGHT = 250;
const HEADER_COLLAPSED_HEIGHT = 0;

export default class TopSong extends Component {
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
    this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
        StatusBar.setBarStyle(this.context.theme.barColor);
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
          "Bảng xếp hạng tháng 12. https://youtu.be/kkz6U59y8Hg",
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
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT-60-getStatusBarHeight()],
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
            <View style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
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
                    <TouchableOpacity
                      style={{ width: 50, alignItems: "center" }}
                      onPress={() => this.onShare()}
                    >
                      <MeIcon size={20} color={"#fff"} icon={meShare} />
                    </TouchableOpacity>
                  </View>
                }
                titleComponent={
                  <View>
                    <Text
                      style={[{ fontSize: 18, color: "#fff" }, textStyle.bold]}
                    >
                      Bảng xếp hạng bài hát
                    </Text>
                  </View>
                }
                color={appConsumer.theme.colorPrimary}
                style={{ backgroundColor: "#453" }}
              />
            </View>

            <Animated.View
              style={[
                styles.header,
                { height: headerHeight, opacity: heroTitleOpacity },
              ]}
            >
              {topmusic.items.slice(0,1).map((item, key) => {
                return (
                  <ImageBackground
                    key={key}
                    blurRadius={32}
                    source={item.image}
                    style={{ width: "100%", height: "100%" }}
                  >
                    

                      
                    <View
                      style={{
                        flex:1,
                        paddingTop: 50 + getStatusBarHeight(),
                        flexDirection: "row",
                        padding:16,
                        alignItems: "center",
                        // justifyContent:"center"
                      }}
                    >
                      
                      <View
                        style={{
                          marginTop: 12,
                          height: 120,
                          width: 120,
                          borderRadius:12,
                          overflow:"hidden"
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            height: "100%",
                            width: "100%",
                            resizeMode: "cover",
                          }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: 16 }}>
                        <Text
                          style={[
                            {
                              fontSize: 18,
                              color: "#fff",
                              paddingBottom: 3,
                              // textShadowColor: "rgba(0, 0, 0, 0.2)",
                              // textShadowOffset: { width: -1, height: 1 },
                              // textShadowRadius: 6,
                            },
                            textStyle.bold,
                          ]}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={[
                            {
                              fontSize: 13,
                              color: "#fff",
                              paddingBottom: 3,
                              // textShadowColor: "rgba(0, 0, 0, 0.2)",
                              // textShadowOffset: { width: -1, height: 1 },
                              // textShadowRadius: 6,
                            },
                            textStyle.bold,
                          ]}
                        >
                          {item.actorName}
                        </Text>
                        <Text
                          style={[
                            {
                              fontSize: 13,
                              color: "#fff",
                              paddingBottom: 3,
                              // textShadowColor: "rgba(0, 0, 0, 0.2)",
                              // textShadowOffset: { width: -1, height: 1 },
                              // textShadowRadius: 6,
                            },
                            textStyle.bold,
                          ]}
                        >
                          Bảng xếp hạng bài hát tháng 12
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                    );
              })}

              
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
                  paddingHorizontal: 12,
                  minHeight:
                    Dimensions.get("window").height -
                    160 -
                    getStatusBarHeight(),
                  backgroundColor: appConsumer.theme.backgroundColorPrimary,
                }}
              >
                {topmusic.items.map((item, key) => {
                    return (
                      <SongItem
                        key={key}
                        imgUrl={item.image}
                        name={item.name}
                        actorName={item.actorName}
                        idx={key + 1}
                        time={item.time}
                      />
                    );
                  })}
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
    top: 0,
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
TopSong.contextType=ThemeContext;