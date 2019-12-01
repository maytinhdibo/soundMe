import React, { Component } from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import { textStyle } from "../../styles/textStyle";
import { searchStyle } from "../../styles/searchStyle";
import { ThemeContext } from "../../AppContextProvider";
export default class AlbumResultItem extends Component {
    render() {
      return (
        <View style={[searchStyle.albumItem,{backgroundColor: this.context.theme.backgroundColorSecondary,}]}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 65,
              width: 65,
              borderRadius: 9,
              resizeMode: "cover",
            }}
          />
          <View
            style={{
              flex: 1,
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
                  color: this.context.theme.colorPrimary,
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
  AlbumResultItem.contextType=ThemeContext;