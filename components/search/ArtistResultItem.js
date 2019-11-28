import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";

export default class ArtistResultItem extends Component {
  render() {
    return (
      <View style={{ marginEnd: 12 }}>
        <CardView cardElevation={2} cornerRadius={37}>
          <Image
            source={this.props.imgUrl}
            style={{
              height: 75,
              width: 75,
              resizeMode: "cover",
            }}
          />
        </CardView>

        <View style={{ flex: 1, width: 75, alignItems: "center" }}>
          <Text
            numberOfLines={1}
            style={[
              {
                padding: 6,
                paddingBottom: 0,
                fontSize: 12,
              },
              textStyle.bold,
            ]}
          >
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
