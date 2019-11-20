import React from "react";
import { Svg, Path } from "react-native-svg";

export default function meShare(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 53.627 53.627">
      <Path d="M53.627 49.385L37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21z" />
    </Svg>
  );
}
