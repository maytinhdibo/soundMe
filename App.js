import React from 'react';
import { StyleSheet, Text, View,ScrollView, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Home from './page/Home';
import Search from './page/Search';

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

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Feed: Home,
    Search: Search,
    Help: Home,
  },
  {
    initialRouteName: 'Feed',
    activeColor: '#f0edf6',
    inactiveColor: '#444321',
    barStyle: { backgroundColor: '#fff' },
  }
);

export default AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
