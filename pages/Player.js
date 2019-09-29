import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {playerStyle} from '../styles/playerStyle';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#345',
          position: 'absolute',
          zIndex: 100,
          width: '100%',
          height: '100%',
          bottom: this.props.open ? '0%' : '-100%',
        }}>
        <Text>Ahihi</Text>
        <Button onPress={this.props.closePlayer} title="Close" />
      </View>
    );
  }
}
