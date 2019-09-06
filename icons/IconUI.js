import React from 'react'; 
import { View } from 'react-native';
export default function Leaf(props) {
  return (
    <View>{props.icon(props)}</View>
  );
}