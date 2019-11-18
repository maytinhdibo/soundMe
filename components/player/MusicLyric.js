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

export default class MusicLyric extends Component {
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
        <View style={[playerStyle.header]}>
          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={[playerStyle.nowPlaying, textStyle.bold]}>
              Lời bài hát
            </Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
            <Text>Ru mãi ngàn năm từng ngón xuân nồng</Text>
            <Text>Bàn tay em năm ngón</Text>
            <Text>Ru cho ngàn năm</Text>
            <Text>Thui ngủ đi em nà.....</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
