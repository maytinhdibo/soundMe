import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { playerStyle } from "../styles/playerStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#667"
        }}
      >
        <View
          style={{
            height: 50,
            flexDirection: "row",
            paddingRight: 12,
            paddingLeft: 12,
            marginTop: getStatusBarHeight()
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              backgroundColor: "#938",
              width: 50
            }}
          ></TouchableOpacity>

          <View
            style={{
              flex: 1,
              alignSelf: "center"
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: "700",
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
              }}
            >
              Now Playing
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#938",
              width: 50
            }}
          ></View>
        </View>
        <View style={{ flex: 1, alignItems: "center", paddingTop: "10%" }}>
          <Image
            source={require("../assets/mytam.jpg")}
            style={{
              alignSelf: "center",
              height: Math.round(Dimensions.get("window").width) * 0.7,
              width: "70%",
              resizeMode: "cover",
              borderRadius: 27,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              padding: 12,
              paddingBottom:3,
              textShadowColor: "rgba(0, 0, 0, 0.5)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10
            }}
          >
            Cho Một Tình Yêu
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textShadowColor: "rgba(0, 0, 0, 0.5)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10
            }}
          >
            Mỹ Tâm
          </Text>
        </View>
        <View
        name="button"
          style={{
            height: 90,
            marginBottom: 40,
            flexDirection: "row",
            backgroundColor:"#556",
            justifyContent: 'space-evenly',
          
          }}
        >
            <View
            style={{
              backgroundColor: "#2980cc",
              width: 50,
              height: 50,
              margin:9,
              alignSelf:"center" 
            }}
          ></View>
           <View
            style={{
              backgroundColor: "#2980cc",
              width: 50,
              height: 50,
              margin:9,
              borderRadius: 100,    
              alignSelf:"center" 
            }}
          ></View>
            <View
            style={{
              backgroundColor: "#0b5ca3",
              width: 72,
              margin:9,
              borderRadius: 100
            }}
          ></View>
            <View
            style={{
              backgroundColor: "#2980cc",
              width: 50,
              height: 50,
              margin:9,
              borderRadius: 100,
              alignSelf:"center" 
            }}
          ></View>
           <View
            style={{
              backgroundColor: "#2980cc",
              width: 50,
              height: 50,
              margin:9,   
              alignSelf:"center" 
            }}
          ></View>
          </View>
      </View>
    );
  }
}
