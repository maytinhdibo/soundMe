import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Share,
  TouchableOpacity,
  StatusBar,
  Slider,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import { playerStyle } from "../styles/playerStyle";
import { textStyle } from "../styles/textStyle";

import Swiper from "react-native-swiper";

import MeIcon from "../icons/MeIcon";
import mePlay from "../icons/icon-pack/mePlay";
import mePause from "../icons/icon-pack/mePause";
import meLeaf from "../icons/icon-pack/meLeaf";
import meShare from "../icons/icon-pack/meShare";

import SoundPlayer from "react-native-sound-player";
import MusicControl from "react-native-music-control";
import MusicMain from "../components/player/MusicMain";

import CardView from "react-native-cardview";
import MusicInfo from "../components/player/MusicInfo";
import MusicLyric from "../components/player/MusicLyric";
import { AppConsumer,ThemeContext } from "../AppContextProvider";
import meRepeat from "../icons/icon-pack/meRepeat";
import meShuffle from "../icons/icon-pack/meShuffle";
import meNext from "../icons/icon-pack/meNext";
import mePrevious from "../icons/icon-pack/mePrevious";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curLine: "...",
      something: false
    };
  }


  async componentDidMount() {
    console.log("START PROPS");
    console.log(this.props);
    console.log("ExND PROPS");

    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        StatusBar.setBarStyle("dark-content");
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      payload => {
        // StatusBar.setBarStyle("light-content");
      }
    );
  }

  onPlayBtn = () =>{
    let x = this.state.something;
    this.setState(
      {something:!x}
    )
    this.context.onPlayBtn()
  }

  renderPlayerPlayPause = () => {
    let playing = this.context.playing;

    return playing == true ? (
      <MeIcon size={20} color="#fff" icon={mePause} />
    ) : (
      <MeIcon size={20} color="#fff" icon={mePlay} />
    );
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Lắng nghe bài hát Ru em từng ngón xuân nồng - Hồng Nhung tại soundMe. https://youtu.be/kkz6U59y8Hg"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
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
  curLine = value => {
    this.setState({ curLine: value });
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <ImageBackground
            blurRadius={34}
            source={appConsumer.songImage}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={{ flex: 1, backgroundColor: this.context.theme.backgroundColorPrimary }}>
              <View style={playerStyle.overlay}>
                <Swiper index={0} loop={false} showsPagination={false}>
                  {/* <MusicInfo /> */}
                  <MusicMain
                    onShare={this.onShare}
                    navigation={this.props.navigation}
                    curLine={this.state.curLine}
                  />
                  <MusicLyric curLine={this.curLine} />
                </Swiper>

                <CardView
                  cardElevation={0}
                  cornerRadius={37.5}
                  style={{
                    backgroundColor: "rgba(254, 111, 97, 0.23)",
                    width: 75,
                    height: 75,
                    padding: 5,
                    marginTop: -15,
                    left:
                      Math.round(Dimensions.get("window").width) * 0.5 - 37.5,
                    bottom: 75,
                    position: "absolute",
                    zIndex: 1000,
                    elevation: 100
                  }}
                >
                  <TouchableOpacity
                    style={{
                      borderRadius: 37.5,
                      backgroundColor: this.context.theme.buttonColor,
                      flex: 1,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={this.onPlayBtn}
                  >
                    {this.renderPlayerPlayPause(this.state.something)}
                  </TouchableOpacity>
                </CardView>

                <CardView
                  name="button"
                  cardElevation={0}
                  cornerRadius={42}
                  style={{
                    height: 190,
                    paddingTop: 30,
                    marginBottom: -75,
                    flexDirection: "row",
                    backgroundColor: this.context.theme.backgroundColorSecondary,
                    justifyContent: "space-evenly",
                    alignItems: "flex-start"
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 50,
                      height: 50,
                      margin: 9
                    }}
                  >
                    <MeIcon size={25} color={this.context.theme.buttonColor} icon={meShuffle} />
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 50,
                      height: 50,
                      margin: 9
                    }}
                  >
                    <MeIcon size={20} color={this.context.theme.buttonColor} icon={mePrevious} />
                  </View>
                  <View
                    style={{
                      // backgroundColor: "#2980cc",
                      width: 50,
                      height: 50
                    }}
                  ></View>

                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 50,
                      height: 50,
                      margin: 9
                    }}
                  >
                    <MeIcon size={20} color={this.context.theme.buttonColor} icon={meNext} />
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 50,
                      height: 50,
                      margin: 9
                    }}
                  >
                    <MeIcon size={25} color={this.context.theme.buttonColor} icon={meRepeat} />
                  </View>
                </CardView>
              </View>
            </View>
          </ImageBackground>
        )}
      </AppConsumer>
    );
  }
}

Player.contextType = ThemeContext;
