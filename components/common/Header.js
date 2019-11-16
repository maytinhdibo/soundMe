import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

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
          style={{alignItems: "center", justifyContent: "center" }}
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
          {/* <Text
            style={[
              {
                fontSize: 18,
                color: this.props.color ? this.props.color : "#000",
              },
              textStyle.bold,
            ]}
          > */}
            {this.props.titleComponent}
          {/* </Text> */}
        </View>
        <View
          style={{alignItems: "center", justifyContent: "center" }}
        >
          {this.props.rightComponent}
        </View>

      </View>
    );
  }
}
