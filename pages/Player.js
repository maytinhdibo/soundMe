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
import { AppConsumer } from "../AppContextProvider";
import meRepeat from "../icons/icon-pack/meRepeat";
import meShuffle from "../icons/icon-pack/meShuffle";
import meNext from "../icons/icon-pack/meNext";
import mePrevious from "../icons/icon-pack/mePrevious";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curLine:"...",
      something: false
    };
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
  // async componentDidUpdate(prevProps){
  //   if( this.props.playing !== prevProps.playing){
  //     console.log("change play")
  //   }
  // }

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
    if(!this.context.loadedMusic){
      this.loadMusic();
    }
    if(this.props.navigation.state.params.togglePlay){
      this.onPlayBtn()
    }
   

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
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
      this.context.updateState({"loadedMusic":success})
    })

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

    MusicControl.on("skipForward", () => {
      this.onCloseNotification();
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
    MusicControl.enableControl("skipForward", true);
    MusicControl.enableControl("skipBackward", false);

    // Default - Allow user to close notification on swipe when audio is paused
    MusicControl.enableControl("closeNotification", true, { when: "always" });
    // MusicControl.enableControl('closeNotification', true, {when: 'always'})
  };

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

  onCloseNotification = () => {
    this.onPause();
    MusicControl.stopControl();
  };

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

  onPlay = () => {
    //Playing  on notif
    MusicControl.updatePlayback({
      state: MusicControl.STATE_PLAYING,
    });
    this.showControlNotif();
    this.context.updateState({ playing: true });
    this.setState({
      something:false
    })
    SoundPlayer.play();
  };

  onPause = () => {
    //Pause on notif
    MusicControl.updatePlayback({
      state: MusicControl.STATE_PAUSED,
    });

    this.context.updateState({ playing: false });
    this.setState({
      something:true
    })
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
    if (this.context.repeat) {
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
      this.context.updateState({
        playing: false,
      });
    }
  };

  replay = () => {
    this.context.updateState({ presentPosition: 0 });
    SoundPlayer.seek(0);
    SoundPlayer.play();
  };

  renderPlayerPlayPause = () => {
    return this.context.playing == true ? (
      <MeIcon size={20} color="#fff" icon={mePause} />
    ) : (
      <MeIcon size={20} color="#fff" icon={mePlay} />
    );
  };

  onPlayBtn = () => {
    this.context.playing = !this.context.playing;
    if (this.context.playing) {
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
  curLine = value => {
    this.setState({ curLine: value });
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <ImageBackground blurRadius={34} source={appConsumer.songImage} style={{width: '100%', height: '100%'}}>
          <View style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.9)" }}>
            <View style={playerStyle.overlay}>
              <Swiper index={1} loop={false} showsPagination={false}>
                <MusicInfo />
                <MusicMain onShare={this.onShare} navigation={this.props.navigation} curLine={this.state.curLine}/>
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
                  left: Math.round(Dimensions.get("window").width) * 0.5 - 37.5,
                  bottom: 75,
                  position: "absolute",
                  zIndex: 1000,
                  elevation:100,
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
                  {this.renderPlayerPlayPause(this.context.playing)}
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
                  backgroundColor: "rgba(255,255,255,0.3)",
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
                  <MeIcon size={25} color="#fe6f61" icon={meShuffle} />
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
                  <MeIcon size={20} color="#fe6f61" icon={mePrevious} />
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
                  <MeIcon size={20} color="#fe6f61" icon={meNext} />
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
                  <MeIcon size={25} color="#fe6f61" icon={meRepeat} />
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

Player.contextType = AppConsumer;
