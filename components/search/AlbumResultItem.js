import React, { Component } from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import { textStyle } from "../../styles/textStyle";
import { searchStyle } from "../../styles/searchStyle";

export default class AlbumResultItem extends Component {
    render() {
      return (
        <View style={searchStyle.albumItem}>
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
      );
    }
  }
  