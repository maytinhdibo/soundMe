import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { textStyle } from "../../styles/textStyle";

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive } = this.props;
    return (
      <View style={{ flex: 1}}>
      <ImageBackground
        source={this.props.image}
        style={{ flex: 1, flexDirection:"row", borderRadius: 16, overflow: "hidden" }}
      >
        <Text
          style={[{
            margin: 9,
            backgroundColor: "rgba(255,255,255,0.95)",
            paddingHorizontal: 12,
            height:22,
            borderRadius: 100,
            fontSize: 14
          }, textStyle.bold]}
        >
          #trending0{this.props.index}
        </Text>
      </ImageBackground>
      </View>
    );
  }
}
