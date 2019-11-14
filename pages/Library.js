import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { searchStyle } from "../styles/searchStyle";
import { createAppContainer } from "react-navigation";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

const FirstRoute = () => (
  <View style={[{ backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[{ backgroundColor: '#673ab7' }]} />
);

const TabNavigator = createMaterialTopTabNavigator(
  {
    HomePage: {
      screen: FirstRoute,
      navigationOptions: {
        tabBarLabel: "Khám phá",
      },
    },
    SearchPage: {
      screen: SecondRoute,
      navigationOptions: {
        tabBarLabel: "Tìm kiếm",
      },
    },
   
  },
  {
    tabBarPosition: "top",
    swipeEnable: true,
    tabBarOptions: {
      activeTintColor: "#4267b2",
      inactiveTintColor: "#606770",
      showIcon: false,
      showLabel: true,
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: "#4267b2",
        bottom: 0,
        width:20,
      },
      labelStyle: {
        width:100,
        backgroundColor:"#321",
        alignContent:"flex-start",
        fontSize: 17,
        color: "#345",
      },
      tabStyle: {
        width: 100,
        height:10
      },
      style: {
        height: 55,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
        backgroundColor: "#fff",
      },
    },
  }
);

const TabContainer = createAppContainer(TabNavigator);

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  recommend = value => {
    this.setState({ searchValue: value });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            marginBottom: 2,
            paddingTop: getStatusBarHeight(),
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                { fontSize: 27, fontWeight: "900", justifyContent: "center" },
                textStyle.bold,
              ]}
            >
              Thư viện
            </Text>
          </View>
        </View>
        <TabContainer/>
      </View>
    );
  }
}
