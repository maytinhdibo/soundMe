import React from "react";
import { Svg, Path } from "react-native-svg";

export default function mePrevious(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 320.012 320.012">
    <Path d="M32.006.012c8.832 0 16 7.168 16 16v116.64L280.166 2.06c4.896-2.784 11.008-2.752 15.904.128s7.936 8.128 7.936 13.824v288c0 5.696-3.04 10.944-7.936 13.824a16.056 16.056 0 01-8.064 2.176 15.85 15.85 0 01-7.84-2.048L48.006 187.372v116.64c0 8.832-7.168 16-16 16s-16-7.168-16-16v-288c0-8.832 7.168-16 16-16z" />
  </Svg>
  );
}