import React from "react";
import { View, Text } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";

import meArrowRight from "../../icons/icon-pack/meArrowRight";
import MeIcon from "../../icons/MeIcon";

export default function SectionTitle(props) {
  
  return (
    <View
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        layout.y
      }}
      style={{ flex: 1, flexDirection: "row" }}
    >
      <Text style={[homeStyle.sectionTitle, textStyle.bold]}>
        {props.title}
      </Text>
      <MeIcon
        style={{
          marginTop: 5,
          justifyContent: "center",
        }}
        size={14}
        color="#345"
        icon={meArrowRight}
      />
    </View>
  );
}
