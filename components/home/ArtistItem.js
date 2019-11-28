import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";
import { ThemeContext } from "../../AppContextProvider";
export default class ArtistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Singer")}>
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
                fontSize: 16,
                color: this.context.theme.colorPrimary,
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
ArtistItem.contextType=ThemeContext;