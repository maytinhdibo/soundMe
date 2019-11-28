import React, { useContext } from "react";
import { View, Text } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";

import meArrowRight from "../../icons/icon-pack/meArrowRight";
import MeIcon from "../../icons/MeIcon";
import {ThemeContext} from "../../AppContextProvider";
export default function SectionTitle(props) {
  const context = useContext(ThemeContext);
  return (
    <View
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        layout.y
      }}
      style={{ width:"100%", flexDirection: "row" }}
    >
      <Text style={[homeStyle.sectionTitle, textStyle.bold,{color:context.theme.colorPrimary}]}>
        {props.title}
      </Text>
      <MeIcon
        style={{
          marginTop: 5,
          justifyContent: "center",
        }}
        size={14}
        icon={meArrowRight}
        color={ context.theme.colorPrimary}
      />
    </View>
  );
}
