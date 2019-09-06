import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, ScrollView, Image } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { changeNavigationBarColor } from 'react-native-navigation-bar-color';

import Home from './pages/Home';
import Search from './pages/Search';

import Leaf from './icons/icon-pack/Leaf';
import IconUI from './icons/IconUI';

try {
  if (Platform.OS == 'android') {
    changeNavigationBarColor('#ffffff');
  }
} catch (e) {
  console.log(e)// {success: false}
}

console.ignoredYellowBox = true;


function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <Text>Profile!</Text>
      <IconUI icon={Leaf} size={40} color="#282" />
    </View>
  );
}

const AppNavigator = createMaterialTopTabNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home Page",
        tabBarIcon: ({ tintColor }) => (
          <IconUI icon={Leaf} size={20} color={tintColor} />
        )
      },
    },
    PagePage: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home Page",
        tabBarIcon: ({ tintColor }) => (
          <IconUI icon={Leaf} size={20} color={tintColor} />
        )
      },
    },
    SearchPage: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Search Page",
        tabBarIcon: ({ tintColor }) => (
          <IconUI icon={Leaf} size={20} color={tintColor} />
        )
      }
    },
    ProfilePage: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile Page",
        tabBarIcon: ({ tintColor }) => (
          <IconUI icon={Leaf} size={20} color={tintColor} />
        )
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnable: true,
    initialRouteName: 'HomePage',
    tabBarOptions: {
      activeTintColor: "#4267b2",
      inactiveTintColor: "#606770",
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: '#4267b2',
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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
      },
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'never' }} style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
