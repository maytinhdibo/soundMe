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
  Dimensions,
} from "react-native";
import { playerStyle } from "../styles/playerStyle";
import { textStyle } from "../styles/textStyle";

import MeIcon from "../icons/MeIcon";
import mePlay from "../icons/icon-pack/mePlay";
import meLeaf from "../icons/icon-pack/meLeaf";

import SoundPlayer from "react-native-sound-player";
import { returnStatement, thisExpression } from "@babel/types";
import MusicControl from "react-native-music-control";
import CardView from "react-native-cardview";
//npm install react-native-music-control --save
//react-native link
/**
 * Add following to your project AndroidManifest.xml
 * <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
 **/

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
      searchValue: "",
      repeat: false,
      title: "Ru em trên từng ngón hồng",
      artist: "Hồng Nhung",
      songImage: require("../assets/hongnhung.jpg"),
      albumName: "Album Hồng Nhung",
    };
  }

  async getInfo() {
    try {
      const info = await SoundPlayer.getInfo();
      this.setState({ duration: info.duration });
      // console.log('getInfo: ', info) // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log("There is no song playing", e);
    }
  }

  async getCurrentTime() {
    try {
      const info2 = await SoundPlayer.getInfo();
      this.setState({ presentPosition: info2.currentTime });
      // console.log("currrentTime:" + info2.currentTime)
    } catch (e) {
      console.log("Can not get current time", e);
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
        // StatusBar.setBarStyle("light-content");
      }
    );
    this.loadAndPlayMusic();

    setInterval(() => {
      this.getCurrentTime();
    }, 1000);

    //onFinishPlay
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      "FinishedPlaying",
      ({ success }) => {
        console.log("finished playing", success);
        this.onFinishPlay();
      }
    );

    MusicControl.enableBackgroundMode(true);

    MusicControl.on("play", () => {
      this.onPlay();
    });

    // on iOS this event will also be triggered by audio router change events
    // happening when headphones are unplugged or a bluetooth audio peripheral disconnects from the device
    MusicControl.on("pause", () => {
      this.onPause();
    });

    MusicControl.on("stop", () => {
      this.onFinishPlay();
    });

    MusicControl.on("nextTrack", () => {
      this.onNextTrack();
    });

    MusicControl.on("previousTrack", () => {
      this.onPreviousTrack();
    });

    this.configControlNotif();
    this.showControlNotif();

    MusicControl.updatePlayback({
      state: MusicControl.STATE_PLAYING,
    });
  }


  configControlNotif = () => {
    // Basic Controls
    MusicControl.enableControl("play", true);
    MusicControl.enableControl("pause", true);
    MusicControl.enableControl("stop", false);
    MusicControl.enableControl("nextTrack", true);
    MusicControl.enableControl("previousTrack", true);
    // Changing track position on lockscreen
    MusicControl.enableControl("changePlaybackPosition", true);

    // Seeking
    MusicControl.enableControl("seekForward", false); // iOS only
    MusicControl.enableControl("seekBackward", false); // iOS only
    MusicControl.enableControl("seek", true); // Android only
    MusicControl.enableControl("skipForward", false);
    MusicControl.enableControl("skipBackward", false);

    // Default - Allow user to close notification on swipe when audio is paused
    MusicControl.enableControl("closeNotification", true, { when: 'paused' });
    // MusicControl.enableControl('closeNotification', true, {when: 'always'})

  }

  showControlNotif = () => {
    MusicControl.setNowPlaying({
      title: this.state.title,
      artwork: this.state.songImage, // URL or RN's image require()
      artist: this.state.artist,
      album: this.state.albumName,
      genre: "Post-disco, Rhythm and Blues, Funk, Dance-pop",
      duration: this.state.duration, // (Seconds)
      description: "Một vài mô tả về bài hát", // Android Only
      color: 0xffffff, // Notification Color - Android Only
      date: "1983-01-02T00:00:00Z", // Release Date (RFC 3339) - Android Only
      rating: 84, // Android Only (Boolean or Number depending on the type)
      notificationIcon: "grade", // Android Only (String), Android Drawable resource name for a custom notification icon
    });
  }



  loadAndPlayMusic() {
    try {
      // play the file mp3 located at /android/app/src/main/res/raw/
      SoundPlayer.playSoundFile("a", "mp3");
      // play from mp3. IT'S WORKING
      // SoundPlayer.playUrl('https://data25.chiasenhac.com/downloads/2039/6/2038231-e4db0911/128/Het%20Thuong%20Can%20Nho%20-%20Duc%20Phuc.mp3')
      this.getInfo();
    } catch (e) {
      console.log("Task failed successfully", e);
    }
  }

  onPlay = () => {
    //Playing  on notif
    MusicControl.updatePlayback({
      state: MusicControl.STATE_PLAYING,
    });
    this.showControlNotif();
    this.setState({ playing: true });
    // console.log("play pressed")
    // console.log(this.state.playing);
    SoundPlayer.play();
  };

  onPause = () => {
    //Pause on notif
    MusicControl.updatePlayback({
      state: MusicControl.STATE_PAUSED,
    });

    this.setState({ playing: false });
    // this.getInfo();
    SoundPlayer.pause();

    // TrackPlayer.pause();
  };

  onNextTrack = () => {
    console.log("playing Next Track");
  };

  onPreviousTrack = () => {
    console.log("playing Previous Track");
  };
  onFinishPlay = () => {
    if (this.state.repeat) {
      console.log("rePLay");
      //replay
      this.replay();

      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING, // (STATE_ERROR, STATE_STOPPED, STATE_PLAYING, STATE_PAUSED, STATE_BUFFERING)
      });
    } else {
      //stop
      console.log("Stop");
      SoundPlayer.seek(0);
      SoundPlayer.pause();
      MusicControl.updatePlayback({
        state: MusicControl.STATE_STOPPED, // (STATE_ERROR, STATE_STOPPED, STATE_PLAYING, STATE_PAUSED, STATE_BUFFERING)
      });
      this.setState({
        playing: false,
      });
    }
  };

  replay = () => {
    this.setState({ presentPosition: 0 });
    SoundPlayer.seek(0);
    SoundPlayer.play();
  };

  renderPlayerPlayPause = () => {
    return this.state.playing === true ? <Text>pause</Text> : <MeIcon size={20} color="#fff" icon={mePlay} />;
  };

  secondToMinuteString = second => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2);
    }
    return "--:--";
  };

  onSliderComplete = position => {
    console.log(position);
    this.setState({ presentPosition: position });
    SoundPlayer.seek(parseInt(position));
    SoundPlayer.play();
    this.setState({ playing: true });
  };

  onPlayBtn = () => {
    this.state.playing = !this.state.playing
    if (this.state.playing) {
      this.onPlay();
    } else {
      this.onPause();
    }
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Lắng nghe bài hát Ru em từng ngón xuân nồng - Hồng Nhung tại soundMe. https://youtu.be/kkz6U59y8Hg",
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

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" translucent={true}/>

        <View ref="overlay" style={playerStyle.overlay}>
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
              <MeIcon size={25} color="#345" icon={mePlay} />
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
              onPress={() => this.onShare()}
              style={{
                // backgroundColor: "#938",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
              }}
            >
              <MeIcon size={25} color="#345" icon={meLeaf} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingTop: "10%" }}>
            <Text style={[playerStyle.songName, textStyle.bold]}>
              {this.state.title}
            </Text>
            <Text style={[playerStyle.artistName, textStyle.regular]}>
              {this.state.artist}
            </Text>

            <CardView
              cardElevation={16}
              cornerRadius={42}
              style={playerStyle.coverImage}
            >
              <Image
                source={this.state.songImage}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </CardView>
          </View>
          <View ref="process">
            <Slider
              minimumValue={0}
              maximumValue={this.state.duration}
              minimumTrackTintColor="#fe6f61"
              // maximumTrackTintColor="#1e88e5"
              thumbTintColor="#fe6f61"
              value={this.state.presentPosition}
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
                {this.secondToMinuteString(this.state.duration)}
              </Text>
              <Text style={[{ color: "#444" }, textStyle.bold]}>
                {this.secondToMinuteString(this.state.presentPosition)}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              padding: 14,
              paddingTop: 0,
              paddingBottom: 45,
            }}
          >
            <MeIcon size={25} color="#fe6f61" icon={mePlay} />

            <MeIcon size={25} color="#fe6f61" icon={mePlay} />
          </View>

          <CardView
            cardElevation={10}
            cornerRadius={37.5}
            style={{
              backgroundColor: "rgba(254, 111, 97, 0.23)",
              width: 75,
              height: 75,
              padding: 3,
              marginTop: -15,
              left: Math.round(Dimensions.get("window").width) * 0.5 - 37.5,
              bottom: 75,
              position: "absolute",
              zIndex: 1,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 37.5,
                backgroundColor: "#fe6f61",
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.onPlayBtn}
            >
              {this.renderPlayerPlayPause(this.state.playing)}
            </TouchableOpacity>
          </CardView>

          <CardView
            name="button"
            cardElevation={9}
            cornerRadius={42}
            style={{
              height: 190,
              paddingTop: 30,
              marginBottom: -65,
              flexDirection: "row",
              backgroundColor: "#fff",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                margin: 9,
              }}
            >
              <MeIcon size={25} color="#fe6f61" icon={mePlay} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                margin: 9,
              }}
            >
              <MeIcon size={25} color="#fe6f61" icon={mePlay} />
            </View>
            <View
              style={{
                // backgroundColor: "#2980cc",
                width: 50,
                height: 50,
              }}
            ></View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                margin: 9,
              }}
            >
              <MeIcon size={25} color="#fe6f61" icon={mePlay} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                margin: 9,
              }}
            >
              <MeIcon size={25} color="#fe6f61" icon={mePlay} />
            </View>
          </CardView>
        </View>
      </View>
    );
  }
}
