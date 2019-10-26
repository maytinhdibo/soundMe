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

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: 0,
      playing: true,
      loading: true,
      duration: 0,
      startValue: 0,
      searchValue: ""
    };
  }

  componentDidMount() {
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
  }


  onPlay = () => {
    let playing = !this.state.playing;
    this.setState({ playing: playing });
    console.log(this.state.playing);
    // TrackPlayer.play();
    try {
      // play the file tone.mp3
      //SoundPlayer.playSoundFile('tone', 'mp3')
      // or play from url
      SoundPlayer.playUrl('https://data25.chiasenhac.com/downloads/2039/6/2038231-e4db0911/128/Het%20Thuong%20Can%20Nho%20-%20Duc%20Phuc.mp3')
    } catch (e) {
      console.log('cannot play the sound file', e)
    }
  }

  onPause = () => {
    let playing = !this.state.playing;
    this.setState({ playing: playing });
    // TrackPlayer.pause();
  }

  renderPlayerPlayPause = (playing, style) => {
    return (this.state.playing === false)
      ? (<Button transparent style={playerStyle.coverImage} onPress={this.onPause}
      title = "paus">
        <MeIcon icon={mePlay} style={style} /> 
      </Button>)
      : (<Button transparent style={playerStyle.coverImage} onPress={this.onPlay}
      title = "play">
        <MeIcon icon={mePlay} style={[style, { left: 4 }]} /> 
      </Button>);
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
              minimumTrackTintColor="#fff"
              // maximumTrackTintColor="#1e88e5"
              thumbTintColor="#fff"
              value={0.4}
              style={{ width: "100%" }}
            ></Slider>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                padding: 14,
                paddingTop: 0
              }}
            >
              <Text style={[{ color: "#fff" }, textStyle.regular]}>00:00</Text>
              <Text style={[{ color: "#fff" }, textStyle.regular]}>02:14</Text>
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
                {this.renderPlayerPlayPause(this.state.playing,playerStyle.coverImage)} 
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
