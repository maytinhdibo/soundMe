import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Slider,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image
} from "react-native";

import MeIcon from "../../icons/MeIcon";
import mePlay from "../../icons/icon-pack/mePlay";
import meShare from "../../icons/icon-pack/meShare";

import { playerStyle } from "../../styles/playerStyle";
import { textStyle } from "../../styles/textStyle";

import CardView from "react-native-cardview";


export default class MusicInfo extends Component {
  secondToMinuteString = second => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2);
    }
    return "--:--";
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={playerStyle.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              // backgroundColor: "#938",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
            }}
          >
            <MeIcon size={25} color="#345" icon={mePlay} />
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={[playerStyle.nowPlaying, textStyle.bold]}>
              Đang phát
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.onShare()}
            style={{
              // backgroundColor: "#938",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
            }}
          >
            <MeIcon size={25} color="#345" icon={meShare} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center", paddingTop: "10%" }}>
          <Text style={[playerStyle.songName, textStyle.bold]}>
            {this.props.title}
          </Text>
          <Text style={[playerStyle.artistName, textStyle.regular]}>
            {this.props.artist && this.props.artist.name}
          </Text>

          <CardView
            cardElevation={16}
            cornerRadius={42}
            style={playerStyle.coverImage}
          >
            <Image
              source={this.props.songImage}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </CardView>
        </View>
        <View ref="process">
          <Slider
            minimumValue={0}
            maximumValue={this.props.duration}
            minimumTrackTintColor="#fe6f61"
            // maximumTrackTintColor="#1e88e5"
            thumbTintColor="#fe6f61"
            value={this.props.presentPosition}
            style={{ width: "100%" }}
            onSlidingComplete={position => this.onSliderComplete(position)}
          ></Slider>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              padding: 14,
              paddingTop: 0,
            }}
          >
            <Text style={[{ color: "#444" }, textStyle.bold]}>
              {this.secondToMinuteString(this.props.duration)}
            </Text>
            <Text style={[{ color: "#444" }, textStyle.bold]}>
              {this.secondToMinuteString(this.props.presentPosition)}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            padding: 14,
            paddingTop: 0,
            paddingBottom: 45,
          }}
        >
          <MeIcon size={25} color="#fe6f61" icon={mePlay} />

          <MeIcon size={25} color="#fe6f61" icon={mePlay} />
        </View>
      </View>
    );
  }
}
