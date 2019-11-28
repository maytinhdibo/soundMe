import React from "react";
import Svg, { Path } from "react-native-svg";

export default function mePlaylist(props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      height={props.size}
      width={props.size}
      fill={props.color}
    >
    <Path d="M340.636 307.787l-120.5-80.334a14.999 14.999 0 00-23.32 12.481v160.667a15 15 0 0023.32 12.479l120.5-80.333a14.998 14.998 0 000-24.96zm-113.82 64.787V267.962l78.458 52.306-78.458 52.306z" />
    <Path d="M497 128.533H15c-8.284 0-15 6.716-15 15V497c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15V143.533c0-8.284-6.716-15-15-15zM482 482H30V158.533h452V482zM448.801 64.268h-385.6c-8.284 0-15 6.716-15 15s6.716 15 15 15h385.6c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
   </Svg>
  );
}
