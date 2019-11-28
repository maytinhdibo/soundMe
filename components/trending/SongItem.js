import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";
import { AppConsumer } from "../../AppContextProvider";
export default class SongItem extends Component {
  constructor(props) {
    super(props);
  }
  topColor(defaultValue) {
    switch (this.props.idx) {
      case 1:
        return "#1abc9c";
      case 2:
        return "#f39c12";
      case 3:
        return "#e64b3c";
      default:
        return defaultValue;
    }
  }
  secondToMinuteString = second => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2);
    }
    return "00:00";
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              flexDirection: "row",
              padding: 9,
              backgroundColor: appConsumer.theme.backgroundColorPrimary,
            }}
          >
            <View style={{ justifyContent: "center", paddingEnd: 9 }}>
              <Text
                style={[
                  {
                    borderBottomWidth: 2,
                    borderBottomColor: this.topColor(
                      appConsumer.theme.colorPrimary
                    ),
                    color: this.topColor(appConsumer.theme.colorPrimary),
                  },
                  textStyle.bold,
                ]}
              >
                {this.props.idx < 10 ? "0" + this.props.idx : this.props.idx}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: "#32f",
                justifyContent: "center",
                marginStart: 5,
              }}
            >
              <Text
                numberOfLines={1}
                style={[
                  textStyle.bold,
                  { color: appConsumer.theme.colorPrimary },
                ]}
              >
                {this.props.name}
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  textStyle.regular,
                  { color: appConsumer.theme.colorSecondary },
                ]}
              >
                {this.props.actorName}
              </Text>
            </View>
            <View style={{ justifyContent: "center", paddingStart: 9 }}>
              <Text
                style={{
                  color: appConsumer.theme.colorSecondary,
                  fontSize: 13,
                }}
              >
                {this.secondToMinuteString(this.props.time)}
              </Text>
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
