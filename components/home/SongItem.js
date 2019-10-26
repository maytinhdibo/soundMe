import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";

export default class SongItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
                fontSize: 16
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
                color: "#777",
                fontSize: 14
              },
              textStyle.regular
            ]}
          >
            {this.props.actorName}
          </Text>
        </View>
      </Animatable.View>
    );
  }
}
