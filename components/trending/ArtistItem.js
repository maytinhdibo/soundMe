import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";

import { AppConsumer } from "../../AppContextProvider";

export default class ArtistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              marginVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardView
              style={{ width: 110 }}
              cardElevation={4}
              cornerRadius={63}
            >
              <Image
                source={this.props.imgUrl}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 63,
                  resizeMode: "cover",
                }}
              />
            </CardView>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                numberOfLines={1}
                style={[
                  {
                    padding: 6,
                    paddingBottom: 0,
                    fontSize: 12,
                    color: appConsumer.theme.colorPrimary,
                  },
                  textStyle.bold,
                ]}
              >
                {this.props.name}
              </Text>
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
