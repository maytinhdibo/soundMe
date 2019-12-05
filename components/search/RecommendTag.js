import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";
import { textStyle } from "../../styles/textStyle";
import {ThemeContext} from "../../AppContextProvider";
export default class RecommendTag extends Component {
    render() {
      return (
        <TouchableOpacity
          onPress={() => this.props.onRecommend(this.props.content)}
        >
          <Text
            style={[
              {
                borderRadius: 18,
                backgroundColor: "rgba(156,156,156,0.5)",
                padding: 9,
                paddingHorizontal: 15,
                marginBottom: 6,
                marginEnd: 6,
                color: this.context.theme.colorPrimary,
              },
              textStyle.bold,
            ]}
          >
            {this.props.content}
          </Text>
        </TouchableOpacity>
      );
    }
  }
  RecommendTag.contextType=ThemeContext;