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
  Dimensions,
  TouchableWithoutFeedback,
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
import mePlay from "./icons/icon-pack/mePlay";

import MeIcon from "./icons/MeIcon";

import Library from "./pages/Library";

import {
  AppContextProvider,
  AppConsumer,
  AppContext,
} from "./AppContextProvider";

console.ignoredYellowBox = ["Accessing"];
const screenWidth = Math.round(Dimensions.get("window").width);
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
    "Khám phá": {
      screen: HomeNavigator,
    },
    "Tìm kiếm": {
      screen: Search,
    },
    "Thư viện": {
      screen: Library,
    },
    "Cá nhân": {
      screen: ProfileNavigator,
    },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => <Nav {...props} />,
    swipeEnable: true,
  }
);

class Nav extends Component {
  navigationHandler = routeName => {
    this.props.navigation.navigate(routeName);
  };

  render() {
    const { navigation } = this.props;
    const routes = navigation.state.routes;
    const icons = [meLeaf, meLeaf, mePlay, meLeaf];
    return (
      <View>
        <PlayerBar
          openPlayer={() => this.props.navigation.navigate("Player")}
        />
        {/* duchm change to context open player */}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {routes.map((route, index) => {
            console.log(routes);
            return (
              <TouchableWithoutFeedback
                onPress={() => this.navigationHandler(route)}
              >
                <View
                  style={{
                    padding: 12,
                    paddingHorizontal: 12,
                    backgroundColor:
                      navigation.state.index === index ? "#343" : "transparent",
                    color: "#fff",
                    borderRadius: 20,
                    alignItems: "center",
                  }}
                  key={route.key}
                  focused={navigation.state.index === index}
                  index={index}
                >
                  <MeIcon size={20} color={"#fe6f61"} icon={icons[index]} />
                  <Text
                    style={[
                      {
                        fontSize: 11,
                        color:
                          navigation.state.index === index ? "#fff" : "#777",
                      },
                      textStyle.bold,
                    ]}
                  >
                    {route.routeName}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    );
  }
}

class MainApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <AppContainer />
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
      <AppContextProvider>
        <SafeAreaView forceInset={{ top: "never" }} style={{ flex: 1 }}>
          <RootContainer />
        </SafeAreaView>
      </AppContextProvider>
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
