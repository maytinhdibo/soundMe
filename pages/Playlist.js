import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { CollapsibleHeaderScrollView } from "react-native-collapsible-header-views";
import CardView from "react-native-cardview";
import SongItem from "../components/playlist/SongItem";

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>This is playlist</Text>
        <CardView
          style={{
            height: 156,
            width: 156,
            resizeMode: "cover",
          }}
          cardElevation={16}
          cornerRadius={18}
        >
          <Image
            source={require("../assets/nuocmat.jpg")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
            }}
          />
        </CardView>
        <Text style={textStyle.bold}>HOÀNG</Text>
        <Text style={textStyle.bold}>Hoàng Thùy Linh</Text>

        <CardView
          cardElevation={16}
          cornerRadius={18}
          style={{ flex: 1, padding:9, borrder, backgroundColor: "#f3f3f3" }}
        >
          <Text>Bài hát</Text>
          <SongItem name="Duyên Âm" actorName="Hoàng Thùy Linh ft Binz" />
          <SongItem name="Duyên Dương" actorName="Hoàng Thùy Linh" />
          <SongItem name="Duyên Âm" actorName="Hoàng Thùy Linh ft Binz" />
        </CardView>
      </View>
    );
  }
}
