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
import mePause from "../../icons/icon-pack/mePause";
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

  componentDidMount() {
    this.loadMusic();
    setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  loadMusic() {
    try {
      // play the file mp3 located at /android/app/src/main/res/raw/
      SoundPlayer.loadSoundFile("a", "mp3");
      // play from mp3. IT'S WORKING
      // SoundPlayer.playUrl('https://data25.chiasenhac.com/downloads/2039/6/2038231-e4db0911/128/Het%20Thuong%20Can%20Nho%20-%20Duc%20Phuc.mp3')
      this.getInfo();
    } catch (e) {
      console.log("Task failed successfully", e);
    }
  }



  async getInfo() {
    try {
      const info = await SoundPlayer.getInfo();
      this.context.updateState({ duration: info.duration });
      // console.log('getInfo: ', info) // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log("There is no song playing", e);
    }
  }

  async getCurrentTime() {
    try {
      const info2 = await SoundPlayer.getInfo();
      this.context.updateState({ presentPosition: info2.currentTime });
      // console.log("currrentTime:" + info2.currentTime)
    } catch (e) {
      console.log("Can not get current time", e);
    }
  }

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
  renderPlayerPlayPause = () => {
    return this.context.playing == true ? (
      <MeIcon size={20} color={this.context.theme.buttonColor} icon={mePause} />
    ) : (
      <MeIcon size={20} color={this.context.theme.buttonColor} icon={mePlay} />
    );
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
                  width: appConsumer.presentPosition/(appConsumer.duration+1)*100 + "%",
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
                {this.renderPlayerPlayPause(this.context.playing)}
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
