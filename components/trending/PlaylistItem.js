import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";

import { AppConsumer } from "../../AppContextProvider";


export default class PlaylistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppConsumer>
        {appConsumer => ( <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Playlist")}>
      <View>
        <CardView cardElevation={2} cornerRadius={6}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 150,
              width: "100%",
              resizeMode: "cover",
            }}
          />
        </CardView>
        <View>
          <Text
            numberOfLines={1}
            style={[
              {
                padding: 6,
                paddingBottom: 0,
                paddingLeft:0,
                fontSize: 14,
                color:appConsumer.theme.colorPrimary
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
                paddingLeft:0,
                color: appConsumer.theme.colorPrimary,
                opacity:0.7,
                fontSize: 14
              },
              textStyle.regular
            ]}
          >
            {this.props.actorName}
          </Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
       )}
       </AppConsumer>
    );
  }
}
