import React from "react";
import { Svg, Path } from "react-native-svg";

export default function meArrowDown(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 240.811 240.811"
    >
      <Path d="M220.088 57.667l-99.671 99.695-99.671-99.707a12.147 12.147 0 00-17.191 0c-4.74 4.752-4.74 12.451 0 17.203l108.261 108.297c4.74 4.752 12.439 4.752 17.179 0L237.256 74.859c4.74-4.752 4.74-12.463 0-17.215-4.728-4.729-12.428-4.729-17.168.023z" />
    </Svg>
  );
}
