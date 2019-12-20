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

import { AppConsumer,ThemeContext } from "../../AppContextProvider";

import { FlatGrid } from "react-native-super-grid";
import ArtistItem from "../../components/trending/ArtistItem";

export default class TopArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeModal: false,
    };
  }
  componentDidMount() {
    this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
        StatusBar.setBarStyle(this.context.theme.barColor);
      }
    );
    this.props.navigation.addListener(
      "willFocus",
      payload => {
        //change return with theme (assign for duchm)
        StatusBar.setBarStyle("light-content");
      }
    );
  }

  render() {
    const items = [
      { name: "Huơng Tràm", image: require("../../assets/artists/huongtram.jpg"), id: 1 },
      { name: "Trinh Thăng Binh", image: require("../../assets/artists/trinhthangbinh.jpg"), id: 1 },
      { name: "Chi Dân", image: require("../../assets/artists/chidan.jpg"), id: 1 },
      { name: "Mr Siro", image: require("../../assets/artists/mrsiro.jpg"), id: 1 },
      { name: "Jack", image: require("../../assets/artists/jack.jpg"), id: 1 },
      { name: "Alan Walker", image: require("../../assets/artists/alan.jpg"), id: 1 },
      { name: "Martin Garrix", image: require("../../assets/artists/martin.jpg"), id: 1 },
      { name: "Trịnh Đình Quang", image: require("../../assets/artists/trinhdinhquang.jpg"), id: 1 },
      { name: "Hiền Hồ", image: require("../../assets/artists/hienho.jpg"), id: 1 },
      { name: "Sơn Tùng M-TP", image: require("../../assets/artists/mtp.jpg"), id: 1 },
      { name: "Tuấn Hưng", image: require("../../assets/artists/tuanhung.jpg"), id: 1 },
      { name: "OSAD", image: require("../../assets/artists/osad.jpg"), id: 1 },
      { name: "Phi Nhung", image: require("../../assets/artists/phinhung.jpg"), id: 1 },
      { name: "Cẩm Ly", image: require("../../assets/artists/camly.jpg"), id: 1 },
      { name: "Bích Phương", image: require("../../assets/artists/bichphuong.jpg"), id: 1 },
      { name: "Phương Ly", image: require("../../assets/artists/phuongly.jpg"), id: 1 },
      { name: "Chi Pu", image: require("../../assets/artists/chipu.jpg"), id: 1 },
      { name: "Bùi Anh Tuấn", image: require("../../assets/artists/buianhtuan.jpg"), id: 1 },
      { name: "Thùy Chi", image: require("../../assets/artists/thuychi.jpg"), id: 1 },
      // { name: "Thu Phương", image:{uri: "https://znews-photo.zadn.vn/w660/Uploaded/oqivovbt/2017_09_08/Ha_Anh_Tuan_5.jpg"}, id: 1 },
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
                    Nghệ sĩ yêu thích
                  </Text>
                </View>
              }
              color={appConsumer.theme.colorPrimary}
              style={{ backgroundColor: "#453" }}
            />

            <FlatGrid
              itemDimension={90}
              items={items}
              style={{
                flex: 1,
                backgroundColor: appConsumer.theme.backgroundColorPrimary,
              }}
              // staticDimension={300}
              // fixed
              // spacing={20}
              renderItem={({ item, index }) => (
                <ArtistItem
                  navigation={this.props.navigation}
                  imgUrl={item.image}
                  name={item.name}
                />
                // <View
                //   style={[styles.itemContainer, { backgroundColor: item.code }]}
                // >
                //   <Text style={styles.itemName}>{item.name}</Text>
                //   <Text style={styles.itemCode}>{item.code}</Text>
                // </View>
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
TopArtist.contextType=ThemeContext;