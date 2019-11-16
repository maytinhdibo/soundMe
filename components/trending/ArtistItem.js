import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";

export default class ArtistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Animatable.View
        animation="bounceInRight"
        easing="ease-out"
        style={homeStyle.artistItem}
      >
        <CardView cardElevation={4} cornerRadius={63}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 126,
              width: 126,
              borderRadius: 63,
              resizeMode: "cover",
              width: "100%"
            }}
          />
        </CardView>
        <View style={{flex:1, alignItems:"center"}}>
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
        </View>
      </Animatable.View>
    );
  }
}
