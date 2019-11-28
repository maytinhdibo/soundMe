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

import { AppConsumer } from "../../AppContextProvider";
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
    const items = [
      { name: "TURQUOISE", code: "#1abc9c" },
      { name: "EMERALD", code: "#2ecc71" },
      { name: "PETER RIVER", code: "#3498db" },
      { name: "AMETHYST", code: "#9b59b6" },
      { name: "WET ASPHALT", code: "#34495e" },
      { name: "GREEN SEA", code: "#16a085" },
      { name: "NEPHRITIS", code: "#27ae60" },
      { name: "BELIZE HOLE", code: "#2980b9" },
      { name: "WISTERIA", code: "#8e44ad" },
      { name: "MIDNIGHT BLUE", code: "#2c3e50" },
      { name: "SUN FLOWER", code: "#f1c40f" },
      { name: "CARROT", code: "#e67e22" },
      { name: "ALIZARIN", code: "#e74c3c" },
      { name: "CLOUDS", code: "#ecf0f1" },
      { name: "CONCRETE", code: "#95a5a6" },
      { name: "ORANGE", code: "#f39c12" },
      { name: "PUMPKIN", code: "#d35400" },
      { name: "POMEGRANATE", code: "#c0392b" },
      { name: "SILVER", code: "#bdc3c7" },
      { name: "ASBESTOS", code: "#7f8c8d" },
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
                  imgUrl={require("../../assets/nuocmat.jpg")}
                  name={"Nửa hồn thương đau"}
                  actorName={"Thu Phương"}
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
