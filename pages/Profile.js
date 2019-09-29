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

const theme = ['Sáng', 'Tối', 'Tự động'];
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      theme: 0,
    };
  }
  showPicker = () => {
    if (Platform.OS === 'android') {
      // only for android
      AndroidDialogPicker.show(
        {
          title: 'Choose your theme...', // title of the dialog
          items: theme, // items/options to choose from
          cancelText: 'Cancel', // cancel text (optional - cancel button won't be render if this is not passed)
        },
        // only called when pressed on one of the items
        // won't be called if user pressed on cancel or dismissed the dialog
        buttonIndex => {
          this.setState({theme: buttonIndex});
        },
      );
    } else {
      // use ActionSheetIOS for iOS
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
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fbfbfb',
        }}>
        <TouchableOpacity onPress={this.showPicker} style={listStyle.item}>
          <View style={listStyle.label}>
            <Text>Giao diện</Text>
          </View>
          <View style={listStyle.action}>
            <Text>{theme[this.state.theme]}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={listStyle.item}>
          <Text style={listStyle.label}>Cá nhân</Text>
        </TouchableOpacity>

        <TouchableOpacity style={listStyle.item}>
          <Text style={listStyle.label}>Cá nhân</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const listStyle = StyleSheet.create({
  item: {
    padding: 12,
    marginBottom: 2,
    backgroundColor: '#fff',
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
