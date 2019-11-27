import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import {ThemeContext} from "../../AppContextProvider";
import CardView from "react-native-cardview";

export default class PlaylistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Playlist")}>
      <Animatable.View
        animation="bounceInRight"
        easing="ease-out"
        style={[homeStyle.playlistItem,{width: 132,}]}
      >
        <CardView cardElevation={4} cornerRadius={16}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 120,
              width: 120,
              borderRadius: 12,
              resizeMode: "cover",
              width: "100%"
            }}
          />
        </CardView>
        <View>
          <Text
            numberOfLines={2}
            style={[
              {
                padding: 6,
                paddingBottom: 0,
                fontSize: 12,
                color:this.context.theme.colorPrimary
              },
              textStyle.bold
            ]}
          >
            {this.props.name}
          </Text>
         
        </View>
      </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
PlaylistItem.contextType=ThemeContext;