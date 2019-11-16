import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";

export default class SectionBadge extends Component {
  constructor(props) {
    super(props);
  }
  checkPos = (min, max) => {
    return min <= this.props.scrollY && max > this.props.scrollY;
  };
  render() {
    return (
      <TouchableOpacity
                onPress={()=>this.props.scrollTo(this.props.target)}
              >
                <Text
                  style={[
                    homeStyle.headerBadge,
                    textStyle.bold,
                    this.checkPos(this.props.min, this.props.max)
                      ? {
                          backgroundColor: "#dd4814",
                          color: "#fff",
                          marginLeft: 10,
                        }
                      : null,
                  ]}
                >
                  {this.props.title}
                </Text>
                </TouchableOpacity>
    );
  }
}
