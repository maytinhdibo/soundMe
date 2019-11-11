import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";

export default class SongItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View
          style={{
            // flex: 1,
            // backgroundColor: "#32f",
            justifyContent: "center",
            marginStart: 5,
          }}
        >
          <Text numberOfLines={1} style={[textStyle.bold]}>
            {this.props.name}
          </Text>
          <Text numberOfLines={1} style={[textStyle.regular]}>
            {this.props.actorName}
          </Text>
        </View>
      </View>
    );
  }
}
