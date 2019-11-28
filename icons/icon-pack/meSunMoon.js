import React from "react";
import Svg, { Path } from "react-native-svg";

export default function meSunMoon(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="-12 0 480 480">
    <Path d="M114.344 117.656a8 8 0 0011.312-11.312l-48-48a8 8 0 00-11.312 11.312zm0 0M72 248a8 8 0 000-16H8a8 8 0 000 16zm0 0M114.344 362.344l-48 48a8 8 0 1011.312 11.312l48-48a8 8 0 00-11.312-11.312zm0 0M232 374.977V105.023C163.57 113.098 112.012 171.098 112.012 240S163.57 366.902 232 374.977zm0 0M432 306.594a109.649 109.649 0 01-37.406 5.957c-61.352-.703-110.559-50.93-110-112.278a116.787 116.787 0 0151.558-95.632c-6.543-.52-13.129-.641-19.297-.641A129.918 129.918 0 00248 123.777v232.446a130.039 130.039 0 00102.812 15.316A130.067 130.067 0 00432 306.625zm0 0M455.398 178.223l-17.773-2.72a7.99 7.99 0 01-6.031-4.503L424 154.832 416.406 171a7.99 7.99 0 01-6.031 4.504l-17.773 2.719 13.125 13.457a7.988 7.988 0 012.168 6.87l-3.016 18.481 15.258-8.43a7.99 7.99 0 017.726 0l15.258 8.43-3.016-18.48a7.988 7.988 0 012.168-6.871zm0 0M240 480a8 8 0 008-8v-80a154.198 154.198 0 01-16-.855V472a8 8 0 008 8zm0 0M248 8a8 8 0 00-16 0v80.855A154.198 154.198 0 01248 88zm0 0" />
  </Svg>
  );
}