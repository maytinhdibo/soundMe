import React, { Component } from "react";
import {withNavigation } from "react-navigation";
import {
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { homeStyle } from "../../styles/homeStyle";

import mePlay from "../../icons/icon-pack/mePlay";
import MeIcon from "../../icons/MeIcon";

import SoundPlayer from "react-native-sound-player";
import MusicControl from "react-native-music-control";
import MarqueeText from "react-native-marquee";
import { textStyle } from "../../styles/textStyle";
import { AppConsumer } from "../../AppContextProvider";



class SongItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  showControlNotif = () => {
    MusicControl.setNowPlaying({
      title: this.context.title,
      artwork: this.context.songImage, // URL or RN's image require()
      artist: this.context.artist.name,
      album: this.context.albumName,
      genre: "Post-disco, Rhythm and Blues, Funk, Dance-pop",
      duration: this.context.duration, // (Seconds)
      description: "Một vài mô tả về bài hát", // Android Only
      color: 0xffffff, // Notification Color - Android Only
      date: "1983-01-02T00:00:00Z", // Release Date (RFC 3339) - Android Only
      rating: 84, // Android Only (Boolean or Number depending on the type)
      notificationIcon: "grade", // Android Only (String), Android Drawable resource name for a custom notification icon
    });
  };

  onPlay = () => {
    //Playing  on notif
    MusicControl.updatePlayback({
      state: MusicControl.STATE_PLAYING,
    });
    this.showControlNotif();
    this.context.updateState({ playing: true });
    // console.log("play pressed")
    // console.log(this.state.playing);
    SoundPlayer.play();
  };

  onPause = () => {
    //Pause on notif
    MusicControl.updatePlayback({
      state: MusicControl.STATE_PAUSED,
    });

    this.context.updateState({ playing: false });
    // this.getInfo();
    SoundPlayer.pause();

    // TrackPlayer.pause();
  };
  onPlayBtn = () => {
    let xplay = !this.context.playing
    if (xplay) {
      this.onPlay();
    } else {
      this.onPause();
    }
  };


  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              width: Math.round(Dimensions.get("window").width),
              backgroundColor: appConsumer.theme.backgroundColorSecondary,
              // borderColor: appConsumer.theme.backgroundColorSecondary,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(111,111,111,0.1)",
                width: "100%",
                height: 3,
                opacity: 0.8,
              }}
            >
              <View
                style={{
                  backgroundColor: appConsumer.theme.buttonColor,
                  width: appConsumer.presentPosition/appConsumer.duration*100 + "%",
                  borderBottomRightRadius: 3,
                  borderTopRightRadius: 3,
                  height: "100%",
                }}
              ></View>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <TouchableOpacity
                onPress= {()=>this.props.navigation.navigate("Player",{"togglePlay":false})}
                style={{
                  flex: 2,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <MarqueeText
                  style={{
                    fontSize: 14,
                    fontFamily: "Quicksand-Bold",
                    color: appConsumer.theme.colorPrimary,
                  }}
                  duration={6000}
                  marqueeOnStart
                  loop
                >
                  {appConsumer.title}
                </MarqueeText>

                <Text
                  style={[
                    textStyle.regular,
                    { fontSize: 12, color: appConsumer.theme.colorSecondary },
                  ]}
                >
                  {appConsumer.artist["name"]}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  marginRight: 5,
                }}
              >
                <TouchableOpacity
                onPress= {this.onPlayBtn}
                style={{
                  flex: 2,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <MeIcon
                  icon={mePlay}
                  size={22}
                  color={appConsumer.theme.buttonColor}
                />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
export default withNavigation(SongItem);
SongItem.contextType = AppConsumer
