import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { CollapsibleHeaderScrollView } from "react-native-collapsible-header-views";

class RecommentTag extends Component {
  render() {
    return (
      <Text
        style={[
          {
            borderRadius: 18,
            backgroundColor: "rgba(156,156,156,0.5)",
            padding: 9,
            paddingHorizontal: 15,
            marginBottom: 6,
            marginEnd: 6,
          },
          textStyle.bold,
        ]}
      >
        {this.props.content}
      </Text>
    );
  }
}
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            marginBottom: 2,
            paddingTop: getStatusBarHeight(),
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                { fontSize: 27, fontWeight: "900", justifyContent: "center" },
                textStyle.bold,
              ]}
            >
              Tìm kiếm
            </Text>
          </View>
        </View>

        <TextInput
          placeholder="Khám phá bài hát mà bạn ưa thích..."
          style={{
            height: 50,
            borderWidth: 0,
            fontSize: 16,
            padding: 12,
            paddingHorizontal: 15,
            backgroundColor: "rgba(200,200,200,0.3)",
            margin: 16,
            marginTop: 10,
            borderRadius: 15,
          }}
          onChangeText={text => this.setState({ searchValue: text })}
          value={this.searchValue}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 6,
            paddingHorizontal: 16,
          }}
        >
          <RecommentTag content="EDM" />
          <RecommentTag content="Hồng Nhung" />
          <RecommentTag content="Bích Phương" />
          <RecommentTag content="Nghe nói anh sắp kết hôn rồi" />
          <RecommentTag content="Lối cũ ta về" />
        </View>
      </View>
    );
  }
}
