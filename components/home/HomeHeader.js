import React, { Component } from "react";
import { View, Text } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import { textStyle } from "../../styles/textStyle";

import { getStatusBarHeight } from "react-native-status-bar-height";

import meArrowRight from "../../icons/icon-pack/meArrowRight";
import MeIcon from "../../icons/MeIcon";
import meSearch from "../../icons/icon-pack/meSearch";

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }
  checkPos(min, max) {
    return this.props.scrollY >= min && this.props.scrollY < max;
  }
  render() {
    return (
      <View key="header">
        {/* <View
          style={{
            flexDirection: "column",
            
            // backgroundColor: "#433"
          }}
        ></View> */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            marginBottom: 2,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                { fontSize: 27, fontWeight: "900", justifyContent: "center" },
                textStyle.bold,
              ]}
            >
              Trang chủ
            </Text>
          </View>
          <View style={{ width: 50, height: 50, justifyContent:"center", alignItems:"center"}}>
            <MeIcon icon={meSearch} size={25} color="#333" />
          </View>
        </View>

    
      </View>
    );
  }
}
