import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { textStyle } from "../../styles/textStyle";
import Header from "../../components/common/Header";

import MeIcon from "../../icons/MeIcon";
import meArrowLeft from "../../icons/icon-pack/meArrowLeft";

import { AppConsumer, ThemeContext } from "../../AppContextProvider";
import PlaylistItem from "../../components/trending/PlaylistItem";

import { FlatGrid } from "react-native-super-grid";

export default class TopPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeModal: false,
    };
  }
  async componentDidMount() {
    this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
        StatusBar.setBarStyle(this.context.theme.barColor);
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
    const items = [
      { name: "Nửa hồn thương đau", code: "#1abc9c" , image: require("../../assets/playlists/nuocmat.jpg"), actorName: "Thu Phuơng"},
      { name: "Giấc mộng trong mơ", code: "#1abc9c" , image: require("../../assets/playlists/nhanduyen.jpg"), actorName: "Hồng Nhung"},
      { name: "Cô Gái M52 (Single)", code: "#1abc9c" , image: require("../../assets/playlists/m52.jpg"), actorName: "HuyR,Tùng Viu"},
      { name: "Hồng Nhan Bạc Phận", code: "#1abc9c" , image: require("../../assets/playlists/hongnhanbacphan.jpg"), actorName: "Jack,Liam"},
      { name: "Tình Khúc Trịnh Công Sơn Vol 2", code: "#1abc9c" , image: require("../../assets/playlists/trinhcongson.jpg"), actorName: "V.A"},
      { name: "Faded", code: "#1abc9c" , image: require("../../assets/playlists/faded.jpg"), actorName: "Alan Walker"},
      { name: "Cô Gái Mở Đường", code: "#1abc9c" , image: require("../../assets/playlists/cogaimoduong.jpg"), actorName: "Cẩm Ly,Quốc Đại"},
      { name: "Tuyển Tập Baby Shark", code: "#1abc9c" , image: require("../../assets/playlists/babyshark.jpg"), actorName: "Tốp Ca"},

      // { name: "Sống lại thời 8x 9x", code: "#1abc9c" , image: require("../../assets/playlists/8x9x.jpg"), actorName: "V.A"},     
      // { name: "Đồi Thông Hai Mộ", code: "#1abc9c" , image: require("../../assets/playlists/doithong2mo.jpg"), actorName: "Đoàn Việt Phương"},
      // { name: "EMERALD", code: "#2ecc71" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
    ];
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
                <View>
                  <Text
                    style={[
                      { fontSize: 18, marginRight: 50, color: "#fff" },
                      textStyle.bold,
                    ]}
                  >
                    Danh sách nổi bật
                  </Text>
                </View>
              }
              color={appConsumer.theme.colorPrimary}
              style={{ backgroundColor: "#453" }}
            />

            <FlatGrid
              itemDimension={130}
              items={items}
              style={{
                flex: 1,
                backgroundColor: appConsumer.theme.backgroundColorPrimary,
              }}
              // staticDimension={300}
              // fixed
              // spacing={20}
              renderItem={({ item, index }) => (
                <PlaylistItem
                  navigation={this.props.navigation}
                  imgUrl={item.image}
                  name={item.name}
                  actorName={item.actorName}
                />
              )}
            />
          </View>
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
TopPlaylist.contextType=ThemeContext;