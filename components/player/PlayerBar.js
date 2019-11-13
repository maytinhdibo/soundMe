import React, { Component } from "react";
import { Text, View, Image, Animated, Easing, TouchableOpacity } from "react-native";
import { homeStyle } from "../../styles/homeStyle";

import mePlay from "../../icons/icon-pack/mePlay";
import MeIcon from "../../icons/MeIcon";

import MarqueeText from 'react-native-marquee';
import { textStyle } from "../../styles/textStyle";
import {AppConsumer} from "../../AppContextProvider";
export default class SongItem extends Component {
  constructor(props) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <AppConsumer>
      { appConsumer => (
        <View
          style={{
            position: "absolute",
            bottom: 55,
            left: 5,
            right: 5,
            zIndex: 10,
            backgroundColor: appConsumer.theme.backgroundColorSecondary,
            borderWidth: 1,
            borderColor: appConsumer.theme.backgroundColorSecondary,
            borderRadius: 2,
            padding: 5,
            flexDirection: "row"
          }}
        >
          <View>
            <Animated.Image
              source={require("../../assets/thuphuong.jpg")}
              style={{
                height: 45,
                width: 45,
                borderRadius: 22.5,
                borderWidth: 1,
                borderColor: appConsumer.theme.backgroundColorPrimary,
                resizeMode: "cover",
                transform: [{ rotate: RotateData }]
              }}
            />
          </View>
          <TouchableOpacity
          onPress={this.props.openPlayer}
            style={{
              flex: 2,
              justifyContent: "center",
              paddingLeft: 5
            }}
          >

              <MarqueeText
                style={{ flex: 1,fontSize: 14, fontFamily: "Quicksand-Bold", color : appConsumer.theme.colorPrimary}}
                duration={6000}
                marqueeOnStart
                loop
              >
                Tên Bài Hát Thật Hay
              </MarqueeText>

            <Text style={[textStyle.regular,{color: appConsumer.theme.colorSecondary}]}>Ca sĩ</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              marginRight: 5
            }}
          >
            <MeIcon icon={mePlay} size={32} color={appConsumer.theme.buttonColor} />
          </View>
        </View>
        )}
      </AppConsumer>
    );
  }
}
