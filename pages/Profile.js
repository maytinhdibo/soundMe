import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Picker,
} from 'react-native';
import {homeStyle} from '../styles/homeStyle';
import AndroidDialogPicker from 'react-native-android-dialog-picker';
import RNAndroidDialogPicker from 'react-native-android-dialog-picker';
import { textStyle } from "../styles/textStyle";
const theme = ['Sáng', 'Tối', 'Tự động'];

import {AppConsumer} from "../AppContextProvider";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      theme: 0,
    };
  }

  render() {
    return (
      <AppConsumer>
      { appConsumer => (
        <View
          style={{
            flex: 1,
            backgroundColor: appConsumer.theme.backgroundColorPrimary,
          }}>
          <TouchableOpacity onPress={
            ()=>{
              if (Platform.OS === 'android') {
                AndroidDialogPicker.show(
                  {
                    title: 'Choose your theme...',
                    items: theme,
                    cancelText: 'Cancel',
                  },
                  buttonIndex => {
                    this.setState({theme: buttonIndex});
                    appConsumer.setTheme(buttonIndex);
                    console.log(appConsumer.theme);
                  },
                );
              } else {
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    title: 'Test',
                    options: ['item1', 'item2', 'Cancel'],
                    cancelButtonIndex: 2,
                  },
                  buttonIndex => {
                    console.log(buttonIndex);
                  },
                );
              }
            }
          } style={[listStyle.item,{backgroundColor : appConsumer.theme.backgroundColorSecondary}]}>
            <View>
              <Text style={[listStyle.label,textStyle.regular, { color : appConsumer.theme.colorPrimary }]}>Giao diện</Text>
            </View>
            <View style={listStyle.action}>
              <Text style={[textStyle.regular,{ color : appConsumer.theme.colorPrimary }]}>{theme[this.state.theme]}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[listStyle.item,{backgroundColor : appConsumer.theme.backgroundColorSecondary}]}>
            <Text  style={[
              listStyle.label,
              textStyle.regular, 
              { color : appConsumer.theme.colorPrimary }
              ]}>Cá nhân
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[listStyle.item,{backgroundColor : appConsumer.theme.backgroundColorSecondary}]}>
            <Text  style={[listStyle.label,textStyle.regular, { color : appConsumer.theme.colorPrimary }]}>Cá nhân</Text>
          </TouchableOpacity>
        </View>
        )}
      </AppConsumer>
    );
  }
}

const listStyle = StyleSheet.create({
  item: {
    padding: 12,
    marginBottom: 2,
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  action: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});
