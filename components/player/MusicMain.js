import React, { Component, useRef } from "react";
import {
  Animated,
  Dimensions,
  Slider,
  TouchableOpacity,
  Text,
  View,
  Button,
  Image,
} from "react-native";

import MeIcon from "../../icons/MeIcon";
import mePlay from "../../icons/icon-pack/mePlay";
import meShare from "../../icons/icon-pack/meShare";

import { playerStyle } from "../../styles/playerStyle";
import { textStyle } from "../../styles/textStyle";
import { AppConsumer } from "../../AppContextProvider";
import SoundPlayer from "react-native-sound-player";

import CardView from "react-native-cardview";
import meArrowDown from "../../icons/icon-pack/meArrowDown";
import meHeart from "../../icons/icon-pack/meHeart";
import meAddPlaylist from "../../icons/icon-pack/meAddPlaylist";

export default class MusicMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGeeseSeason: true,
    };
  }

  secondToMinuteString = second => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2);
    }
    return "0:00";
  };

  onSliderComplete = position => {
    this.context.updateState({ presentPosition: position });
    SoundPlayer.seek(parseInt(position));
    SoundPlayer.play();
    this.context.updateState({ playing: true });
  };

  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View style={{ flex: 1 }}>
            <View style={playerStyle.header}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{
                  // backgroundColor: "#938",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                }}
              >
                <MeIcon size={25} color="#345" icon={meArrowDown} />
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                <Text style={[playerStyle.nowPlaying, textStyle.bold]}>
                  Đang phát
                </Text>
              </View>

              <TouchableOpacity
                onPress={this.props.onShare}
                style={{
                  // backgroundColor: "#938",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                }}
              >
                <MeIcon size={25} color="#345" icon={meShare} />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={[playerStyle.songName, textStyle.bold]}>
                {appConsumer.title}
              </Text>
              <Text style={[playerStyle.artistName, textStyle.regular]}>
                {appConsumer.artist["name"]}
              </Text>

              <CardView
                cardElevation={16}
                cornerRadius={42}
                style={playerStyle.coverImage}
              >
                <Image
                  source={appConsumer.songImage}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </CardView>
              <View
                style={{
                  display:
                    (Dimensions.get("window").height /
                    Dimensions.get("window").width)>1.8?"flex":"none",
                  height: 40,
                  marginTop: 9,
                  marginBottom: 24,
                }}
              >
                <Text
                  style={[
                    {
                      paddingVertical: 16,
                      fontSize: 16,
                    },
                    textStyle.medium,
                  ]}
                >
                  {this.props.curLine}
                </Text>
              </View>

              <View style={{ flexDirection: "row", padding: 12 }}>
                {/* <View
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: "#ccc",
                    borderRadius: 5,
                  }}
                /> */}
                <View
                  style={{
                    width: 15,
                    height: 7,
                    marginHorizontal: 3,
                    backgroundColor: "#f43",
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: "#ccc",
                    borderRadius: 5,
                  }}
               />
              </View>
            </View>
            {/* <View ref="process"> */}
            <View>
              <Slider
                minimumValue={0}
                maximumValue={appConsumer.duration}
                minimumTrackTintColor="#fe6f61"
                // maximumTrackTintColor="#1e88e5"
                thumbTintColor="#fe6f61"
                value={appConsumer.presentPosition}
                style={{ width: "100%" }}
                onSlidingComplete={position => this.onSliderComplete(position)}
              ></Slider>

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row-reverse",
                  padding: 14,
                  paddingTop: 0,
                }}
              >
                <Text style={[{ color: "#444" }, textStyle.bold]}>
                  {this.secondToMinuteString(appConsumer.duration)}
                </Text>
                <Text style={[{ color: "#444" }, textStyle.bold]}>
                  {this.secondToMinuteString(appConsumer.presentPosition)}
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                padding: 14,
                paddingTop: 0,
                paddingBottom: 25,
              }}
            >
              <MeIcon size={25} color="#fe6f61" icon={meAddPlaylist} />

              <MeIcon size={25} color="#fe6f61" icon={meHeart} />
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
MusicMain.contextType = AppConsumer;
