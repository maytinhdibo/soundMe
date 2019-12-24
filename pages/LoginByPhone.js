import React, { Component } from 'react';
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
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class LoginByPhone extends Component {

  render() {
    return (
      <View style={styles.container}>
         <View
        style={{
          height: getStatusBarHeight(),
          backgroundColor:"rgba(111,111,111,0.5)"}}>
          </View>
          
        <View style={styles.inputContainer}>
          <MeIcon style={[styles.icon, styles.inputIcon]} icon={mePlay} size={25} color="blue" />
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>
        
        <View style={styles.inputContainer}>
          <MeIcon style={[styles.icon, styles.inputIcon]} icon={mePlay} size={25} color="blue" />
          <TextInput style={styles.inputs}
              placeholder="Phone number"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
     
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate("OTPInput")}
        >
          <Text style={styles.loginText}>Tiếp tục</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection:"column"
    // backgroundColor: '#B0E0E6',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:350,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:350,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  loginText: {
    color: 'white',
  },
});
