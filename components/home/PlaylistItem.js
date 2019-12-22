import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";
import {ThemeContext} from "../../AppContextProvider";
import { withNavigation } from "react-navigation";
class PlaylistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {
        this.context.changeAlbumState(this.props.name, this.props.actorName, this.props.imgUrl, this.props.subplaylists);
        this.props.navigation.navigate("Playlist")
      }}>
      <Animatable.View
        animation="bounceInRight"
        easing="ease-out"
        style={homeStyle.playlistItem}
      >
        <CardView cardElevation={4} cornerRadius={16}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 150,
              width: 150,
              borderRadius: 16,
              resizeMode: "cover",
              width: "100%"
            }}
          />
        </CardView>
        <View>
          <Text
            numberOfLines={1}
            style={[
              {
                color: this.context.theme.colorPrimary,
                padding: 6,
                paddingBottom: 0,
                fontSize: 14
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
PlaylistItem.contextType=ThemeContext;
export default withNavigation(PlaylistItem);