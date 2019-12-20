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
      { name: "TURQUOISE", code: "#1abc9c" , image: require("../../assets/nuocmat.jpg"), actorName: ""},
      // { name: "EMERALD", code: "#2ecc71" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "PETER RIVER", code: "#3498db" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "AMETHYST", code: "#9b59b6" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "WET ASPHALT", code: "#34495e" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "GREEN SEA", code: "#16a085" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "NEPHRITIS", code: "#27ae60" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "BELIZE HOLE", code: "#2980b9" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "WISTERIA", code: "#8e44ad" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "MIDNIGHT BLUE", code: "#2c3e50" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "SUN FLOWER", code: "#f1c40f" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "CARROT", code: "#e67e22" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "ALIZARIN", code: "#e74c3c" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "CLOUDS", code: "#ecf0f1" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "CONCRETE", code: "#95a5a6" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "ORANGE", code: "#f39c12" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "PUMPKIN", code: "#d35400" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "POMEGRANATE", code: "#c0392b" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "SILVER", code: "#bdc3c7" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
      // { name: "ASBESTOS", code: "#7f8c8d" , imageUrl: "../../assets/nuocmat.jpg", actorName: ""},
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
                  name={"Nửa hồn thương đau"}
                  actorName={"Thu Phương"}
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