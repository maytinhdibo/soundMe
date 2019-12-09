import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Slider,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import MeIcon from "../../icons/MeIcon";
import mePlay from "../../icons/icon-pack/mePlay";
import meShare from "../../icons/icon-pack/meShare";

import { playerStyle } from "../../styles/playerStyle";
import { textStyle } from "../../styles/textStyle";

import CardView from "react-native-cardview";

export default class MusicInfo extends Component {
  secondToMinuteString = second => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2);
    }
    return "--:--";
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={playerStyle.header}>
          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={[playerStyle.nowPlaying, textStyle.bold]}>
              Thông tin
            </Text>
          </View>
        </View>
        {/* <Text>Bài hát: Chia Tay Hoàng Hôn</Text>
<Text>Ca sĩ: NSƯT Thanh Lam</Text>
<Text>Nhạc sĩ: Thuận Yến</Text> */}
      </View>
    );
  }
}
