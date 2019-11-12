import React from "react";
import { Svg, Path } from "react-native-svg";

export default function meArrowLeft(props) {
  return (
    <Svg
      viewBox="0 0 1000 1000"
      height={props.size}
      width={props.size}
      fill={props.color}
    >
      <Path d="M750.6 922.6c15.3 15.5 15.3 40.4 0 55.8-15.3 15.4-40 15.4-55.2 0l-446-450.5c-15.3-15.4-15.3-40.3 0-55.8L695.5 21.5c15.3-15.4 40-15.4 55.2 0 15.2 15.4 15.3 40.4 0 55.8L343.7 500l406.9 422.6z" />
    </Svg>
  );
}
