import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { homeStyle } from "../../styles/homeStyle";

import mePlay from "../../icons/icon-pack/mePlay";
import MeIcon from "../../icons/MeIcon";

import MarqueeText from "react-native-marquee";
import { textStyle } from "../../styles/textStyle";
import { AppConsumer } from "../../AppContextProvider";
export default class SongItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              width: Math.round(Dimensions.get("window").width),
              backgroundColor: appConsumer.theme.backgroundColorSecondary,
              // borderColor: appConsumer.theme.backgroundColorSecondary,
              padding: 5,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={this.props.openPlayer}
              style={{
                flex: 2,
                justifyContent: "center",
                paddingLeft: 5,
              }}
            >
              <MarqueeText
                style={{
                  fontSize: 14,
                  fontFamily: "Quicksand-Bold",
                  color: appConsumer.theme.colorPrimary,
                }}
                duration={6000}
                marqueeOnStart
                loop
              >
                Tên Bài Hát Thật Hay
              </MarqueeText>

              <Text
                style={[
                  textStyle.regular,
                  { color: appConsumer.theme.colorSecondary },
                ]}
              >
                Ca sĩ
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                marginRight: 5,
              }}
            >
              <MeIcon
                icon={mePlay}
                size={22}
                color={appConsumer.theme.buttonColor}
              />
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
