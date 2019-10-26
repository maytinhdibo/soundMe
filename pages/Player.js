import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Slider,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import { playerStyle } from "../styles/playerStyle";
import { textStyle } from "../styles/textStyle";
export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  componentDidMount() {
    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        StatusBar.setBarStyle("dark-content");
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      payload => {
        StatusBar.setBarStyle("light-content");
      }
    );
  }
  render() {
    return (
      <ImageBackground
        blurRadius={42}
        source={require("../assets/hongnhung.jpg")}
        style={{ flex: 1 }}
      >
        <View
          ref="overlay"
          style={playerStyle.overlay}
        >
          <View
            style={playerStyle.header}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                backgroundColor: "#938",
                width: 50
              }}
            ></TouchableOpacity>

            <View
              style={{
                flex: 1,
                alignSelf: "center"
              }}
            >
              <Text
                style={[playerStyle.nowPlaying,textStyle.bold]}
              >
                Now Playing
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#938",
                width: 50
              }}
            ></View>
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingTop: "10%"}}>
            <Image
              source={require("../assets/hongnhung.jpg")}
              style={playerStyle.coverImage}
            />
            <Text
              style={[playerStyle.songName, textStyle.regular]}
            >
              Ru Em Từng Ngón Xuân Nồng
            </Text>
            <Text
              style={[playerStyle.artistName, textStyle.bold]}
            >
              Hồng Nhung
            </Text>
          </View>
          <View ref="process">
            <Slider
              minimumTrackTintColor="#fff"
              // maximumTrackTintColor="#1e88e5"
              thumbTintColor="#fff"
              value={0.4}
              style={{ width: "100%" }}
            ></Slider>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                padding: 14,
                paddingTop: 0
              }}
            >
              <Text style={[{ color: "#fff" }, textStyle.regular]}>00:00</Text>
              <Text style={[{ color: "#fff" }, textStyle.regular]}>02:14</Text>
            </View>
          </View>
          <View
            name="button"
            style={{
              height: 90,
              marginBottom: 20,
              flexDirection: "row",
              backgroundColor: "#556",
              justifyContent: "space-evenly"
            }}
          >
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                alignSelf: "center"
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                borderRadius: 100,
                alignSelf: "center"
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#0b5ca3",
                width: 72,
                margin: 9,
                borderRadius: 100
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                borderRadius: 100,
                alignSelf: "center"
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#2980cc",
                width: 50,
                height: 50,
                margin: 9,
                alignSelf: "center"
              }}
            ></View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
