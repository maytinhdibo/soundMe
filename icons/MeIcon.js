import React from 'react'; 
import { View } from 'react-native';
export default function MeIcon(props) {
  return (
    <View {...props}>{props.icon(props)}</View>
  );
}