import React from "react";
import { View, Text } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";

import { getStatusBarHeight } from "react-native-status-bar-height";

import meArrowRight from "../../icons/icon-pack/meArrowRight";
import MeIcon from "../../icons/MeIcon";

export default function HomeHeader(props) {
  return (
    <View key="header">
      <View
        style={{
          flexDirection: "column",
          height: getStatusBarHeight()
          // backgroundColor: "#433"
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 12,
          paddingRight: 9,
          marginBottom: 2
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              { fontSize: 27, fontWeight: "900", justifyContent: "center" },
              textStyle.bold
            ]}
          >
            Trang chủ
          </Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: "#456" }}>
          <MeIcon icon={meArrowRight} size={40} color="#282" />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={[homeStyle.headerBadge, textStyle.bold]}>
          Playlist gần đây
        </Text>
        <Text style={[homeStyle.headerBadge, textStyle.bold]}>
          Bài hát đề xuất
        </Text>

        <Text style={[homeStyle.headerBadge, textStyle.bold]}>Top 100</Text>
      </View>
    </View>
  );
}
