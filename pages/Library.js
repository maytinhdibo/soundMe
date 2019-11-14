import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { searchStyle } from "../styles/searchStyle";
import { createAppContainer } from "react-navigation";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

const FirstRoute = () => (
  <View style={[{ backgroundColor: "#ff4081" }]}>
    <Text>ahihi</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[{ backgroundColor: "#fff081" }]}>
    <Text>ahoho</Text>
  </View>
);

class Tabs extends Component {
  navigationHandler = routeName => {
    this.props.navigation.navigate(routeName);
  };

  render() {
    const { navigation } = this.props;
    const routes = navigation.state.routes;

    return (
      <View style={{ flexDirection: "row", padding: 12 }}>
        {routes.map((route, index) => {
          console.log(routes);
          return (
            <TouchableWithoutFeedback
              onPress={() => this.navigationHandler(route)}
            >
              <View
                style={{
                  padding: 6,
                  paddingHorizontal: 12,
                  marginEnd: 6,
                  backgroundColor:
                    navigation.state.index === index ? "#f21" : "transparent",
                  color: "#fff",
                  borderRadius: 20,
                }}
                key={route.key}
                focused={navigation.state.index === index}
                index={index}
              >
                <Text
                  style={[
                    {
                      fontSize: 14,
                      color: navigation.state.index === index ? "#fff" : "#000",
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
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    "Bài hát yêu thích": {
      screen: FirstRoute,
    },
    "Ca sĩ": {
      screen: SecondRoute,
    },
    "Album": {
      screen: FirstRoute,
    },
  },
  {
    tabBarPosition: "top",
    tabBarComponent: props => <Tabs {...props} />,
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
        <TabContainer />
      </View>
    );
  }
}
