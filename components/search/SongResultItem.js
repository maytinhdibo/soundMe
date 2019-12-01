import React, { Component } from "react";
import {
    Text,
    View,
    Image,
  } from "react-native";
import { textStyle } from "../../styles/textStyle";
import { searchStyle } from "../../styles/searchStyle";
import { ThemeContext } from "../../AppContextProvider";
export default class SongResultItem extends Component {
    render() {
      return (
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
                  color:this.context.theme.colorPrimary,
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
                  color: this.context.theme.colorSecondary,
                  fontSize: 14,
                },
                textStyle.regular,
              ]}
            >
              {this.props.actorName}
            </Text>
          </View>
        </View>
      );
    }
  }
  SongResultItem.contextType=ThemeContext;
  