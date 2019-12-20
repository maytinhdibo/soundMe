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
      { name: "Thu Phương", image:"https://znews-photo.zadn.vn/w660/Uploaded/oqivovbt/2017_09_08/Ha_Anh_Tuan_5.jpg", id: 1 },
      { name: "Hà Trần", image:"https://images.vov.vn/Uploaded/gyJ8yPVAEwcWKoZvAlyuA/2017_06_08/ha_tran_YFTO.gif", id: 1 },
      { name: "Tuấn Ngọc", image:"https://nguoi-noi-tieng.com/photo/tieu-su-ca-si-tuan-ngoc-5316.jpg", id: 1 },
      { name: "NSƯT Thanh Lam", image:"https://vcdn-giaitri.vnecdn.net/2018/07/18/thanhlamtop2-1531881678_1200x0.jpg", id: 1 },
      { name: "Thu Phương", image:"https://cdnmedia.thethaovanhoa.vn/2016/09/15/14/56/Thu-P-anh-D-MiOu.jpg", id: 1 },
      { name: "Đức Phúc", image:"https://yt3.ggpht.com/a/AGF-l7-qp1PZfTFYbssFxGXEh1EwfLZll40l8ArijQ=s900-c-k-c0xffffffff-no-rj-mo", id: 1 },
      { name: "Hồng Nhung", image:"https://vcdn-giaitri.vnecdn.net/2019/02/28/Hong-Nhung-1-1765-1551330844.jpg", id: 1 },
      { name: "Taylor Swift", image:"http://kenh14cdn.com/crop/640_360/2019/11/15/taylor-swift-time-100-2019-082-157379879271782036850-crop-15737994789651578406810.jpg", id: 1 },
      { name: "Tuấn Hưng", image:"https://saobiz.net/wp-content/uploads/2017/03/gia-the-cua-tuan-hung-2.jpg", id: 1 },
      { name: "Hương Giang Idol", image:"https://ss-images.catscdn.vn/w500/2019/05/19/5222855/hg1.jpg", id: 1 },
      { name: "Trần Thái Hòa", image:"https://avatar-nct.nixcdn.com/playlist/2013/11/07/2/e/6/4/1383813758511_500.jpg", id: 1 },
      { name: "Thiên Tôn", image:"https://zmp3-photo-fbcrawler.zadn.vn/covers/e/7/e725c182b3fc1442e381728521534ee0_1382095162.jpg", id: 1 },
      { name: "Trinh Thăng Binh", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/5/9/7/c/597c5594c732d3857de91b16156f7f32.jpg", id: 1 },
      { name: "Chi Dân", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/d/6/5/b/d65b7cbb1aebec4e63566c5087e183b1.jpg", id: 1 },
      { name: "Mr Siro", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg", id: 1 },
      { name: "JustaTee", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/c/7cdddb737643f7197a0b21886cd328e0_1509951099.jpg", id: 1 },
      { name: "OnlyC", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/d/d/a/6dda1e6d7690c4c43ed97d6150619495.jpg", id: 1 },
      { name: "Đàm Vĩnh Hưng", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/f/9/5/6f95a5545394cf4b65830cab489788e8.jpg", id: 1 },
      { name: "Soobin Hoàng Sơn", image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/b/4/c/8b4c040a3f0a64672e8dad7078aff3d1.jpg", id: 1 },
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
                  imgUrl={{uri: item.image}}
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