import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  Button,
} from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Playlist from "./pages/Playlist";
import Player from "./pages/Player";

import PlayerBar from "./components/player/PlayerBar";

import { textStyle } from "./styles/textStyle";

import meLeaf from "./icons/icon-pack/meLeaf";
import MeIcon from "./icons/MeIcon";
import NewHome from "./pages/NewHome";

console.ignoredYellowBox = ["Accessing"];

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Playlist: {
    screen: Playlist,
    navigationOptions: {
      header: null,
    },
  },
});

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Cá nhân",
    },
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: "Khám phá",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center" }}>
            <MeIcon icon={meLeaf} size={20} color={tintColor} />
            <Text style={[textStyle.bold, { fontSize: 10, color: tintColor }]}>
              Khám phá
            </Text>
          </View>
        ),
      },
    },
    SearchPage: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Tìm kiếm",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center" }}>
            <MeIcon icon={meLeaf} size={20} color={tintColor} />
            <Text style={[textStyle.bold, { fontSize: 10, color: tintColor }]}>
              Tìm kiếm
            </Text>
          </View>
        ),
      },
    },
    LibraryPage: {
      screen: NewHome,
      navigationOptions: {
        tabBarLabel: "Thư viện",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center" }}>
            <MeIcon icon={meLeaf} size={20} color={tintColor} />
            <Text style={[textStyle.bold, { fontSize: 10, color: tintColor }]}>
              Thư viện
            </Text>
          </View>
        ),
      },
    },
    ProfilePage: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center" }}>
            <MeIcon icon={meLeaf} size={20} color={tintColor} />
            <Text style={[textStyle.bold, { fontSize: 10, color: tintColor }]}>
              Cá nhân
            </Text>
          </View>
        ),
      },
    },
  },
  {
    tabBarPosition: "bottom",
    swipeEnable: true,
    initialRouteName: "HomePage",
    tabBarOptions: {
      activeTintColor: "#4267b2",
      inactiveTintColor: "#606770",
      showIcon: true,
      showLabel: false,
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: "#4267b2",
        top: 0,
      },
      labelStyle: {
        fontSize: 12,
        color: "#345",
      },
      tabStyle: {
        // width: 100,
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

class MainApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PlayerBar
          openPlayer={() => this.props.navigation.navigate("Player")}
        />
        <AppContainer />
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainApp,
    },
    Player: {
      screen: Player,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);
const AppContainer = createAppContainer(AppNavigator);
const RootContainer = createAppContainer(RootStack);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerVisible: false,
    };
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: "never" }} style={{ flex: 1 }}>
        <RootContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
