import React, { Component } from "react";
import { View, Text } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";

import { getStatusBarHeight } from "react-native-status-bar-height";

import meArrowRight from "../../icons/icon-pack/meArrowRight";
import MeIcon from "../../icons/MeIcon";
import meSearch from "../../icons/icon-pack/meSearch";

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }
  checkPos(min, max) {
    return this.props.scrollY >= min && this.props.scrollY < max;
  }
  render() {
    return (
      <View key="header">
        <View
          style={{
            flexDirection: "column",
            height: getStatusBarHeight(),
            // backgroundColor: "#433"
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            marginBottom: 2,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                { fontSize: 27, fontWeight: "900", justifyContent: "center" },
                textStyle.bold,
              ]}
            >
              Trang chủ
            </Text>
          </View>
          <View style={{ width: 50, height: 50, backgroundColor: "#456" }}>
            <MeIcon icon={meSearch} size={40} color="#282" />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={[
              homeStyle.headerBadge,
              textStyle.bold,
              this.checkPos(0, 20)
                ? {
                    backgroundColor: "#dd4814",
                    color: "#fff",
                    marginLeft: 10,
                  }
                : null,
            ]}
          >
            Playlist nghe gần đây
          </Text>
          <Text
            style={[
              homeStyle.headerBadge,
              textStyle.bold,
              this.checkPos(20, 100)
                ? {
                    backgroundColor: "#dd4814",
                    color: "#fff",
                    marginLeft: 10,
                  }
                : null,
            ]}
          >
            Bài hát đề xuất
          </Text>

          <Text
            style={[
              homeStyle.headerBadge,
              textStyle.bold,
              this.checkPos(100, 200)
                ? {
                    backgroundColor: "#dd4814",
                    color: "#fff",
                    marginLeft: 10,
                  }
                : null,
            ]}
          >
            Top 100
          </Text>
        </View>
      </View>
    );
  }
}
