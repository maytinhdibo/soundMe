import React, { Component } from "react";
import {
  Text,
  View,
  Share,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { textStyle } from "../styles/textStyle";
import CardView from "react-native-cardview";
import SongItem from "../components/playlist/SongItem";
import Header from "../components/common/Header";

import MeIcon from "../icons/MeIcon";
import meArrowRight from "../icons/icon-pack/meArrowRight";
import meArrowLeft from "../icons/icon-pack/meArrowLeft";
import mePlay from "../icons/icon-pack/mePlay";

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  async componentDidMount() {
    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
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
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Lắng nghe Hoàng - Hoàng Thùy Linh tại soundMe. https://youtu.be/kkz6U59y8Hg",
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
    return (
      <View
        style={{ flex: 1, position: "relative", backgroundColor: "#fe6f61" }}
      >
        <Header
          leftComponent={
            <TouchableOpacity
              style={{ width: 50, alignItems: "center" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <MeIcon size={20} color="#fff" icon={meArrowLeft} />
            </TouchableOpacity>
          }
          rightComponent={
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ width: 50, alignItems: "center" }}>
                <MeIcon size={20} color="#fff" icon={mePlay} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: 50, alignItems: "center" }}
                onPress={() => this.onShare()}
              >
                <MeIcon size={20} color="#fff" icon={meArrowLeft} />
              </TouchableOpacity>
            </View>
          }
          titleComponent={
            <View style={{ paddingLeft: 50 }}>
              <Text
                style={[{ fontSize: 18, color: "#ffefef" }, textStyle.bold]}
              >
                Danh sách phát
              </Text>
            </View>
          }
          color="#ffefef"
          style={{ backgroundColor: "#453" }}
        />
        <View
          style={{
            position: "absolute",
            top: 65,
            paddingTop: 9,
            alignSelf: "center",
            zIndex: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={[{ fontSize: 32, color: "#fff" }, textStyle.bold]}>
              Hoàng
            </Text>
            <Text style={[{ fontSize: 20, color: "#fff" }, textStyle.regular]}>
              Hoàng Thùy Linh
            </Text>
            <CardView
              style={{
                marginTop: 12,
                height: 220,
                width: 220,
                zIndex: -1,
              }}
              cardElevation={10}
              cornerRadius={32}
            >
              <Image
                source={{
                  uri:
                    "https://i.scdn.co/image/7be436d24a08969d8724edc8c0e290a4b5624fff",
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                }}
              />
            </CardView>
            <CardView
              style={{
                position: "absolute",
                width: 65,
                height: 65,
                backgroundColor: "#fe6f61",
                bottom: -32.5,
                alignItems: "center",
                justifyContent: "center",
              }}
              cardElevation={16}
              cornerRadius={32.5}
            >
              <MeIcon size={20} color="#fff" icon={meArrowRight} />
            </CardView>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 235,
            padding: 9,
            paddingTop: 115,
            // borderRadius:12,
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
            backgroundColor: "#ffffff",
          }}
        >
          <SongItem
            idx={1}
            name="Duyên Âm"
            actorName="Hoàng Thùy Linh ft Binz"
          />
          <SongItem idx={2} name="Duyên Dương" actorName="Hoàng Thùy Linh" />
          <SongItem
            idx={3}
            name="Duyên Âm"
            actorName="Hoàng Thùy Linh ft Binz"
          />
        </View>
      </View>
    );
  }
}
