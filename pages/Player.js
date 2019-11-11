import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Slider,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import { playerStyle } from "../styles/playerStyle";
import { textStyle } from "../styles/textStyle";
import MeIcon from "../icons/MeIcon";
import mePlay from "../icons/icon-pack/mePlay";
import SoundPlayer from 'react-native-sound-player';
import { returnStatement } from "@babel/types";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: 0,
      playing: true,
      loading: true,
      duration: 0,
      startValue: 0,
      presentPosition: 0,
      searchValue: ""
    };
  }

  async getInfo() { // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
      this.setState({ duration: info.duration })
      // console.log('getInfo: ', info) // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e)
    }
  }

  async getCurrentTime() {
    try {
      const info2 = await SoundPlayer.getInfo()
      this.setState({ presentPosition: info2.currentTime })
      console.log("currrentTime:" + info2.currentTime)
    } catch (e) {
      console.log('Can not get current time', e)

    }
  }

  async componentDidMount() {
    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        StatusBar.setBarStyle("dark-content");
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      payload => {
        StatusBar.setBarStyle("light-content");
      }
    );
    this.loadAndPlayMusic();

    setInterval(() => {
      this.getCurrentTime()

    }, 1000);
  }


  loadAndPlayMusic() {
    try {
      // play the file mp3 located at /android/app/src/main/res/raw/
      SoundPlayer.playSoundFile('a', 'mp3')
      // play from mp3. IT'S WORKING
      // SoundPlayer.playUrl('https://data25.chiasenhac.com/downloads/2039/6/2038231-e4db0911/128/Het%20Thuong%20Can%20Nho%20-%20Duc%20Phuc.mp3')
      this.getInfo()
    } catch (e) {
      console.log('Task failed successfully', e)
    }
  }

  onPlay = () => {
    let playing = !this.state.playing;
    this.setState({ playing: playing });
    // console.log("play pressed")
    // console.log(this.state.playing);
    SoundPlayer.play()
  }

  onPause = () => {
    let playing = !this.state.playing;
    this.setState({ playing: playing });
    // this.getInfo();
    SoundPlayer.pause();
    // TrackPlayer.pause();
  }


  renderPlayerPlayPause = (playing, style) => {
    return (this.state.playing === true)
      ? (<Button transparent style={playerStyle.coverImage} onPress={this.onPause}
        title="paus">
        <MeIcon icon={mePlay} style={style} />
      </Button>)
      : (<Button transparent style={playerStyle.coverImage} onPress={this.onPlay}
        title="play">
        <MeIcon icon={mePlay} style={[style, { left: 4 }]} />
      </Button>);
  };

  secondToMinuteString = (second) => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ':' + ('0' + Math.floor(i % 60)).slice(-2);
    }
    return "--:--";
  };


  onSliderComplete = (position) => {
    console.log(position)
    this.setState({ presentPosition: position });
    SoundPlayer.seek(parseInt(position));
  };

  render() {
    return (
      <ImageBackground
        blurRadius={42}
        source={require("../assets/hongnhung.jpg")}
        style={{ flex: 1 }}
      >
        <View
          ref="overlay"
          style={playerStyle.overlay}
        >
          <View
            style={playerStyle.header}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                backgroundColor: "#938",
                width: 50
              }}
            ></TouchableOpacity>

            <View
              style={{
                flex: 1,
                alignSelf: "center"
              }}
            >
              <Text
                style={[playerStyle.nowPlaying, textStyle.bold]}
              >
                Now Playing
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#938",
                width: 50
              }}
            ></View>
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingTop: "10%" }}>
            <Image
              source={require("../assets/hongnhung.jpg")}
              style={playerStyle.coverImage}
            />
            <Text
              style={[playerStyle.songName, textStyle.regular]}
            >
              Ru Em Từng Ngón Xuân Nồng
            </Text>
            <Text
              style={[playerStyle.artistName, textStyle.bold]}
            >
              Hồng Nhung
            </Text>
          </View>
          <View ref="process">
            <Slider
              minimumValue={0}
              maximumValue={this.state.duration}
              minimumTrackTintColor="#fff"
              // maximumTrackTintColor="#1e88e5"
              thumbTintColor="#fff"
              value={this.state.presentPosition}
              style={{ width: "100%" }}

              onSlidingComplete={position => this.onSliderComplete(position)}
            ></Slider>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                padding: 14,
                paddingTop: 0
              }}
            >
              <Text style={[{ color: "#fff" }, textStyle.regular]}
                  >{this.secondToMinuteString(this.state.duration)}
              </Text>
              <Text style={[{ color: "#fff" }, textStyle.regular]}
                  >{this.secondToMinuteString(this.state.presentPosition)}
              </Text>
            </View>
          </View>
          <View
            name="button"
            style={{
              height: 90,
              marginBottom: 20,
              flexDirection: "row",
              backgroundColor: "#556",
              justifyContent: "space-evenly"
            }}
          >
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                alignSelf: "center"
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                borderRadius: 100,
                alignSelf: "center"
              }}
            ></View>
            <View style={playerStyle.nowPlaying}>
              <TouchableOpacity>
                {this.renderPlayerPlayPause(this.state.playing, playerStyle.coverImage)}
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                borderRadius: 100,
                alignSelf: "center"
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                alignSelf: "center"
              }}
            ></View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
