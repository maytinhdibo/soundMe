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
  Dimensions
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

import Library from "./pages/Library";

import { AppContextProvider, AppConsumer, AppContext } from "./AppContextProvider";

console.ignoredYellowBox = ["Accessing"];
const screenWidth = Math.round(Dimensions.get('window').width);
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
          <AppConsumer>
          { appConsumer => (
            <View style={{height:55, width:screenWidth/4,justifyContent:"center", alignItems: "center", backgroundColor: appConsumer.theme.backgroundColorSecondary }}>
              <MeIcon icon={meLeaf} size={20} color={appConsumer.theme.colorPrimary} />
              <Text style={[textStyle.bold, { fontSize: 10, color:appConsumer.theme.colorPrimary }]}>
                Khám phá
              </Text>
            </View>
            )}
          </AppConsumer>
        ),
      },
    },
    SearchPage: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Tìm kiếm",
        tabBarIcon: ({ tintColor }) => (
          <AppConsumer>
          { appConsumer => (
            <View style={{height:55, width:screenWidth/4,justifyContent:"center", alignItems: "center", backgroundColor: appConsumer.theme.backgroundColorSecondary }}>
              <MeIcon icon={meLeaf} size={20} color={appConsumer.theme.colorPrimary} />
              <Text style={[textStyle.bold, { fontSize: 10, color:appConsumer.theme.colorPrimary }]}>
                Tìm kiếm
              </Text>
            </View>
            )}
          </AppConsumer>
        ),
      },
    },
    LibraryPage: {
      screen: Library,
      navigationOptions: {
        tabBarLabel: "Thư viện",
        tabBarIcon: ({ tintColor }) => (
          <AppConsumer>
          { appConsumer => (
            <View style={{height:55, width:screenWidth/4,justifyContent:"center", alignItems: "center", backgroundColor: appConsumer.theme.backgroundColorSecondary }}>
              <MeIcon icon={meLeaf} size={20} color={appConsumer.theme.colorPrimary} />
              <Text style={[textStyle.bold, { fontSize: 10, color:appConsumer.theme.colorPrimary }]}>
                Thư viện
              </Text>
            </View>
            )}
          </AppConsumer>
        ),
      },
    },
    ProfilePage: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ tintColor }) => (
          <AppConsumer>
          { appConsumer => (
            <View style={{height:55, width:screenWidth/4,justifyContent:"center", alignItems: "center", backgroundColor: appConsumer.theme.backgroundColorSecondary }}>
              <MeIcon icon={meLeaf} size={20} color={appConsumer.theme.colorPrimary} />
              <Text style={[textStyle.bold, { fontSize: 10, color:appConsumer.theme.colorPrimary }]}>
                Cá nhân
              </Text>
            </View>
            )}
          </AppConsumer>
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
        backgroundColor:'#fff',
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
