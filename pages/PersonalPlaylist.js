import React, { Component } from "react";
import {
  Text,
  View,
  Share,
  Animated,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { textStyle } from "../styles/textStyle";
import CardView from "react-native-cardview";
import SongItem from "../components/playlist/SongItem";
import Header from "../components/common/Header";

import { getStatusBarHeight } from "react-native-status-bar-height";

import MeIcon from "../icons/MeIcon";
import meArrowRight from "../icons/icon-pack/meArrowRight";
import meArrowLeft from "../icons/icon-pack/meArrowLeft";
import meShare from "../icons/icon-pack/meShare";
import mePlay from "../icons/icon-pack/mePlay";
import meHeart from "../icons/icon-pack/meHeart";

import { AppConsumer } from "../AppContextProvider";

export default class PersonalPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  async componentDidMount() {
    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
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
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.backgroundColorPlaylist,
            }}
          >
            <Header
              leftComponent={
                <TouchableOpacity
                  style={{ width: 50, alignItems: "center" }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <MeIcon size={20} color={"#fff"} icon={meArrowLeft} />
                </TouchableOpacity>
              }
              titleComponent={
                <View style={{ paddingRight: 50 }}>
                  <Text
                    style={[{ fontSize: 18, color: "#fff" }, textStyle.bold]}
                  >
                    Danh sách phát
                  </Text>
                </View>
              }
              color={appConsumer.theme.colorPrimary}
              style={{ backgroundColor: "#453" }}
            />
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: appConsumer.theme.backgroundColorPrimary,
              }}
            >
              <SongItem
                idx={1}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={2}
                name="Duyên Dương"
                actorName="Hoàng Thùy Linh"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
            </ScrollView>
          </View>
        )}
      </AppConsumer>
    );
  }
}
