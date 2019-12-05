import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback
  } from "react-native";
import { textStyle } from "../../styles/textStyle";
import { searchStyle } from "../../styles/searchStyle";
import { AppConsumer } from "../../AppContextProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SongResultItem extends Component {

  onSongPressed = () => {
    console.log("Song in playlist pressed");
    this.context.loadMusic();
    this.context.play();
  };
    render() {
      return (
        <TouchableWithoutFeedback onPress={this.onSongPressed}>
        <View style={searchStyle.songItem}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 50,
              width: 50,
              borderRadius: 9,
              resizeMode: "cover",
            }}
          />
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
                {
                  padding: 6,
                  paddingBottom: 0,
                  fontSize: 16,
                },
                textStyle.bold,
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
                  color: "#777",
                  fontSize: 14,
                },
                textStyle.regular,
              ]}
            >
              {this.props.actorName}
            </Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
      );
    }
  }
  
  SongResultItem.contextType = AppConsumer;
  