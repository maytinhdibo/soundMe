import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../../styles/textStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50 + getStatusBarHeight(),
          paddingTop: getStatusBarHeight(),
          justifyContent: "center",
        }}
      >
        <View
          style={{ width: 50, alignItems: "center", justifyContent: "center" }}
        >
          {this.props.leftComponent}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              {
                fontSize: 18,
                color: this.props.color ? this.props.color : "#000",
              },
              textStyle.bold,
            ]}
          >
            Danh sách phát
          </Text>
        </View>
        <View
          style={{ width: 50, alignItems: "center", justifyContent: "center" }}
        ></View>
      </View>
    );
  }
}
