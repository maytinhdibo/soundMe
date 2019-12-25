import React, { Component } from "react";
import { Dark, Light } from "./styles/theme-context";
import { AsyncStorage, StatusBar } from "react-native";
const Context = React.createContext();
import SoundPlayer from "react-native-sound-player";
import MusicControl from "react-native-music-control";

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import libraryData from "./assets/data/libraryData"

export class AppContextProvider extends Component {
  state = {
    theme: Light,
    setTheme: theme => {
      if (theme == 0) {
        this.setState({ theme: Light });
        StatusBar.setBarStyle("dark-content");
      } else if (theme == 1) {
        this.setState({ theme: Dark });
        StatusBar.setBarStyle("light-content");
      } else {
        let date = new Date();
        let hrs = date.getHours();
        const themeByHour = hrs >= 19 || hrs <= 6 ? Dark : Light;
        const barColor = hrs >= 19 || hrs <= 6 ? "light-content" : "dark-content";
        this.setState({ themePanel: false, theme: themeByHour });
        StatusBar.setBarStyle(barColor);
      }
    },
    loadedMusic: false,
    notifShowing: false,
    playerState: 0,
    playing: false,
    loading: true,
    duration: 0,
    startValue: 0,
    presentPosition: 0,
    searchValue: "",
    repeat: true,

    songState: {
      title: "Em gái mưa",
      artist: {
        name: "Hương Tràm",
        id: 1
      },
      songImage: require("./assets/huongtram.jpg"),
    },
    changeSongState: (title, artist, songImage) => {

      this.setState({
        songState: {
          title: title,
          artist: {
            name: artist
          },
          songImage: songImage || require("./assets/huongtram.jpg")
        }
      });
      this.state.showControlNotif();
    },

    albumName: "Album Hồng Nhung",

    albumState: {
      albumName: "Nguoi hay quen em di",
      albumActor: "abc",
      songImage: require("./assets/huongtram.jpg"),
      subplaylists: [],
    },
    changeAlbumState: (albumName, albumActor, songImage, subplaylists) => {
      this.setState({
        albumState: {
          albumName: albumName,
          albumActor: albumActor,
          songImage: songImage || require("./assets/huongtram.jpg"),
          subplaylists: subplaylists
        }
      })
      this.state.showControlNotif();
    },

    artistState: {
      artistName: "Huong Tram",
      artistNumberLike: "1.2tr",
      songImage: require("./assets/huongtram.jpg"),
      playlists: [],
    },
    changeArtistState: async (image, numberLike, artistName, playlists) => {
      await this.setState({ artistState: { songImage: image , artistNumberLike: numberLike, artistName: artistName, playlists: playlists } });
      this.state.showControlNotif();
    },

    libraryState: {
      playlist: libraryData.data,
      subplaylist: [],
    },
    changeLibraryState: (subplaylist) => {
      // this.state.libraryState.subplaylist = subplaylist;
      this.setState({ libraryState: { subplaylist: subplaylist } });
    },
    addMusicToLibrary: (key) => {
      // console.log(this.state.libraryState)
      let newLib = this.state.libraryState.playlist
      newLib[key].playlist.push({ name: this.state.songState.title, actorName: this.state.songState.artist.name })
      // this.setState({libraryState: { playlist : newLib}})
      // console.log(this.state.libraryState)
    },

    icons: [
      require("./assets/icon-album/0-03.png"),
      require("./assets/icon-album/1-03.png"),
      require("./assets/icon-album/2-03.png"),
      require("./assets/icon-album/3-03.png"),
      require("./assets/icon-album/4-03.png"),
      require("./assets/icon-album/5-03.png"),
      require("./assets/icon-album/6-03.png"),
      require("./assets/icon-album/7-03.png"),
      require("./assets/icon-album/8-03.png"),
      require("./assets/icon-album/9-03.png"),
    ],
    createNewPlaylist: (name) => {
      // this.state.libraryState.playlist.push({playlistName: name, playlist: []});
      let newListState = this.state.libraryState.playlist;
      newListState.push({ playlistName: name, playlist: [], image: this.state.icons[Math.floor(Math.random() * 10)] });
      // console.log(name)
      // this.setState({libraryState: {playlist: newListState}});
    },
    updateState: someDict => {
      this.setState(someDict);
    },
    loadMusic: () => {
      try {
        console.log("USE CONTEXT");
        console.log("USE CONTEXT" + this.state);
        // play the file mp3 located at /android/app/src/main/res/raw/
        SoundPlayer.loadSoundFile("a", "mp3");
        // play from mp3. IT'S WORKING
        // SoundPlayer.playUrl('https://data25.chiasenhac.com/downloads/2039/6/2038231-e4db0911/128/Het%20Thuong%20Can%20Nho%20-%20Duc%20Phuc.mp3')
        this.state.getInfo();
      } catch (e) {
        console.log("Task failed successfully", e);
      }
    },

    getInfo: async () => {
      try {
        const info = await SoundPlayer.getInfo();
        //   this.setState({ duration: info.duration });
        this.setState({ duration: info.duration });
        console.log("getInfo: ", info); // {duration: 12.416, currentTime: 7.691}
      } catch (e) {
        console.log("There is no song playing", e);
      }
    },
    play: () => {
      //Playing  on notif
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING
      });

      this.setState({ playing: true });
      // if (!this.state.notifShowing) {
      this.state.showControlNotif();
      // }
      console.log("play pressed");
      console.log("state playing now is: " + this.state.playing);

      SoundPlayer.play();
    },

    pause: () => {
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PAUSED
      });

      this.setState({ playing: false });
      SoundPlayer.pause();
    },

    onPlayBtn: () => {
      console.log("on play button working");
      let xplay = !this.state.playing;
      if (xplay) {
        this.state.play();
      } else {
        this.state.pause();
      }
      console.log("playing: " + this.state.playing);
    },

    getCurrentTime: async () => {
      try {
        const info2 = await SoundPlayer.getInfo();
        console.log(info2);
        this.setState({ presentPosition: info2.currentTime });
        // console.log("currrentTime:" + info2.currentTime)
      } catch (e) {
        console.log("Can not get current time", e);
      }
    },

    showControlNotif: () => {
      this.state.configNotification()
      //change state in context
      this.setState({
        notifShowing: true
      });

      //show notification
      MusicControl.setNowPlaying({
        title: this.state.songState.title,
        artwork: this.state.songState.songImage, // URL or RN's image require()
        artist: this.state.songState.artist["name"],
        album: this.state.albumName,
        genre: "Post-disco, Rhythm and Blues, Funk, Dance-pop",
        duration: this.state.duration, // (Seconds)
        description: "Một vài mô tả về bài hát", // Android Only
        color: 0xffffff, // Notification Color - Android Only
        date: "1983-01-02T00:00:00Z", // Release Date (RFC 3339) - Android Only
        rating: 84, // Android Only (Boolean or Number depending on the type)
        notificationIcon: "grade" // Android Only (String), Android Drawable resource name for a custom notification icon
      });
    },
    onFinishPlay: () => {
      if (this.state.repeat) {
        console.log("rePLay");
        //replay
        this.state.replay();

        MusicControl.updatePlayback({
          state: MusicControl.STATE_PLAYING // (STATE_ERROR, STATE_STOPPED, STATE_PLAYING, STATE_PAUSED, STATE_BUFFERING)
        });
      } else {
        //stop
        console.log("Stop");
        SoundPlayer.seek(0);
        SoundPlayer.pause();
        MusicControl.updatePlayback({
          state: MusicControl.STATE_STOPPED // (STATE_ERROR, STATE_STOPPED, STATE_PLAYING, STATE_PAUSED, STATE_BUFFERING)
        });
        this.setState({
          playing: false
        });
      }
    },
    replay: () => {
      this.setState({ presentPosition: 0 });
      SoundPlayer.seek(0);
      SoundPlayer.play();
    },
    onNextTrack: () => {
      console.log("NEXT TRACK");
    },
    onPreviousTrack: () => {
      console.log("PREVIOUS TRACK");
    },
    onCloseNotification: () => {
      console.log("CLOSE NOTIFICATION");
      this.state.pause();
      MusicControl.stopControl();
      this.setState({ notifShowing: false })
    },
    configNotification: () => {
      MusicControl.enableBackgroundMode(true);

      MusicControl.on("play", () => {
        this.state.play();
      });

      // on iOS this event will also be triggered by audio router change events
      // happening when headphones are unplugged or a bluetooth audio peripheral disconnects from the device
      MusicControl.on("pause", () => {
        this.state.pause();
      });

      MusicControl.on("stop", () => {
        this.state.onFinishPlay();
      });

      MusicControl.on("nextTrack", () => {
        this.state.onNextTrack();
      });

      MusicControl.on("previousTrack", () => {
        this.state.onPreviousTrack();
      });

      MusicControl.on("skipForward", () => {
        this.state.onCloseNotification();
      });

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
    }
  };

  componentDidMount = async () => {
    this.state.setTheme(await AsyncStorage.getItem("theme"));
    console.log("MOUNT APP CONTEXT");
    this.state.loadMusic();
    setInterval(() => {
      this.state.getCurrentTime();
    }, 1000);

    //onFinishPlay
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      "FinishedPlaying",
      ({ success }) => {
        console.log("finished playing", success);
        this.state.onFinishPlay();
      }
    );
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      "FinishedLoading",
      ({ success }) => {
        this.setState({ loadedMusic: success });
      }
    );


  };
  render() {
    const { theme, artistState, albumState, libraryState } = this.state;
    return (
      <Context.Provider value={this.state} theme={theme} artistState={artistState} albumState={albumState} libraryState={libraryState}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const ThemeContext = Context;
export const AppConsumer = Context.Consumer;
