import React, { Component } from 'react';
import { StyleSheet, Platform,Text, View, ScrollView, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { changeNavigationBarColor } from 'react-native-navigation-bar-color';

import Home from './page/Home';
import Search from './page/Search';
import { registerRootComponent } from 'expo';

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
    </View>
  );
}

const AppNavigator = createMaterialTopTabNavigator(
  {
    Feed: Home,
    Search: Search,
    Help: Home,
  },
  {
    tabBarPosition: 'bottom',
    swipeEnable: true,
    initialRouteName: 'Feed',
    activeColor: '#f0edf6',
    inactiveColor: '#444321',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: '#f72',
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
