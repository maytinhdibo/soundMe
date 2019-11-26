import React from 'react';
import {
  Svg,
  Path,
} from 'react-native-svg';
 
export default function meLeaf(props) {
  return (
    // <Svg viewBox="0 0 512 512">
    <Svg height={props.size} width={props.size} fill={props.color}>
    <Path d="M15.7 7.3l-7-7c-.4-.4-1-.4-1.4 0l-7 7c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l.3-.3V13c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V8.4l.3.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4zM8 11.5c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5-.5-.2-.5-.5zm4 1.5c0 .6-.4 1-1 1h-1V9c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v5H5c-.6 0-1-.4-1-1V6.4l4-4 4 4V13z" />
  </Svg>
  );
}