import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";
import {AppConsumer} from "../../AppContextProvider";
export default class SongItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppConsumer>
      { appConsumer => (
        <View style={{ flexDirection: "row", padding: 9 , backgroundColor:appConsumer.theme.backgroundColorPrimary}}>
          <View style={{ justifyContent: "center", paddingEnd: 9 }}>
            <Text
              style={[{ borderBottomWidth: 2, borderBottomColor:appConsumer.theme.colorPrimary, color: appConsumer.theme.colorPrimary }, textStyle.bold]}
            >
              {this.props.idx < 10 ? "0" + this.props.idx : this.props.idx}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: "#32f",
              justifyContent: "center",
              marginStart: 5,
            }}
          >
            <Text numberOfLines={1} style={[textStyle.bold,{color:appConsumer.theme.colorPrimary}]}>
              {this.props.name}
            </Text>
            <Text numberOfLines={1} style={[textStyle.regular, {color:appConsumer.theme.colorSecondary}]}>
              {this.props.actorName}
            </Text>
          </View>
          <View style={{ justifyContent: "center", paddingStart: 9 }}>
            <Text style={{color:appConsumer.theme.colorSecondary, fontSize:13}}>02:01</Text>
          </View>
        </View>
        )}
      </AppConsumer>
    );
  }
}
