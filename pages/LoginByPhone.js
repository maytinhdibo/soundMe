import React, { Component } from "react";
import MeIcon from "../icons/MeIcon";
import mePlay from "../icons/icon-pack/mePlay";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";

export default class LoginByPhone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: getStatusBarHeight(),
            width: "100%",
            position: "absolute",
            top: 0,
            backgroundColor: "rgba(111,111,111,0.5)"
          }}
        ></View>

        <Text style={[textStyle.bold, { fontSize: 32,color:"#345", marginBottom:15 }]}>Thông tin</Text>
        <View style={styles.inputContainer}>
          {/* <MeIcon style={[styles.icon, styles.inputIcon]} icon={mePlay} size={25} color="blue" /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Tên của bạn"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <MeIcon style={[styles.icon, styles.inputIcon]} icon={mePlay} size={25} color="blue" /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Số điện thoại"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate("OTPInput")}
        >
          <Text style={[styles.loginText, textStyle.bold, { fontSize: 16 }]}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
    // backgroundColor: '#B0E0E6',
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 350,
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    paddingLeft: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1
  },
  icon: {
    width: 30,
    height: 30
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 350,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#485a96"
  },
  loginText: {
    color: "white"
  }
});
