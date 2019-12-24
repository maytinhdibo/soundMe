import React from "react";
import Svg, { Path } from "react-native-svg";

export default function meFacebook(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 512 512"
    >
      <Path d="M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z" />
    </Svg>
  );
}
