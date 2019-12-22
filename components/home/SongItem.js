import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import { ThemeContext } from "../../AppContextProvider";

export default class SongItem extends Component {
  constructor(props) {
    super(props);
  }

  songPressed = () => {
    console.log("Song pressed");
    this.context.changeSongState(this.props.name, this.props.actorName, this.props.imgUrl)
    this.context.loadMusic();
    this.context.play();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.songPressed}>
        <Animatable.View
          animation="bounceInUp"
          easing="ease-out"
          style={homeStyle.songItem}
        >
          <Image
            source={this.props.imgUrl}
            style={{
              height: 75,
              width: 75,
              borderRadius: 16,
              resizeMode: "cover"
            }}
          />
          <View
            style={{
              flex: 1,
              // backgroundColor: "#32f",
              justifyContent: "center",
              marginStart: 5
            }}
          >
            <Text
              numberOfLines={1}
              style={[
                {
                  padding: 6,
                  paddingBottom: 0,
                  fontSize: 16,
                  color: this.context.theme.colorPrimary
                },
                textStyle.bold
              ]}
            >
              {this.props.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                {
                  padding: 6,
                  paddingTop: 0,
                  color: this.context.theme.colorSecondary,
                  fontSize: 14
                },
                textStyle.regular
              ]}
            >
              {this.props.actorName}
            </Text>
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
SongItem.contextType = ThemeContext;
