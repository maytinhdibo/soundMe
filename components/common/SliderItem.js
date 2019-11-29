import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { textStyle } from "../../styles/textStyle";
import CardView from "react-native-cardview";
import {ThemeContext} from "../../AppContextProvider";
export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive } = this.props;
    return (
      <View style={{ flex: 1, padding:12, paddingBottom:42}}>
        <CardView cardElevation={6} cornerRadius={16} style={{flex:1}}>
      <ImageBackground
        source={this.props.image}
        style={{ flex: 1, flexDirection:"row", overflow: "hidden" }}
      >
        <Text
          style={[{
            color: this.context.theme.colorPrimary,
            margin: 9,
            backgroundColor: this.context.theme.backgroundColorSecondary,
            paddingHorizontal: 12,
            height:22,
            borderRadius: 100,
            fontSize: 14
          }, textStyle.bold]}
        >
          #trending0{this.props.index}
        </Text>
      </ImageBackground>
      </CardView>
      </View>
    );
  }
}
SliderItem.contextType=ThemeContext;