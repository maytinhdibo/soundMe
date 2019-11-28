import React from "react";
import Svg, { Path } from "react-native-svg";

export default function mePlay(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 24 24" >
      <Path d="M3.9 18.9V5.1c0-1.6 1.7-2.6 3-1.8l12 6.9c1.4.8 1.4 2.9 0 3.7l-12 6.9c-1.3.7-3-.3-3-1.9z" />
    </Svg>
  );
}
