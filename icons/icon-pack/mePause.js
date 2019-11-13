import React from "react";
import { Svg, Path } from "react-native-svg";

export default function mePause(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 1024 1024"
      fill="currentColor"
      overflow="hidden"
    >
      <Path d="M703.936 832c-35.392.128-63.936-29.632-63.936-66.24V258.432C640 221.568 668.672 192 704 192c35.328-.192 64 29.76 64 66.304v507.392c0 36.672-28.672 66.432-64.064 66.304zM384 765.696V258.304c0-36.544-28.672-66.496-64-66.304-35.328 0-64 29.568-64 66.432V765.76c0 36.608 28.544 66.368 63.936 66.24 35.392.128 64.064-29.632 64.064-66.304z" />
    </Svg>
  );
}
