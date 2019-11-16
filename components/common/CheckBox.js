import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MeIcon from "../../icons/MeIcon";
import meCheck from "../../icons/icon-pack/meCheck";
import { AppConsumer } from "../../AppContextProvider";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive } = this.props;
    return (
      <AppConsumer>
        {appConsumer => (<TouchableWithoutFeedback onPress={this.props.onPress}>
        <TouchableWithoutFeedback
          style={{
            borderWidth: 1.5,
            borderRadius: 25,
            width: 25,
            height: 25,
            alignItems: "center",
            justifyContent: "center",
            borderColor: appConsumer.theme.buttonColor,
            backgroundColor:this.props.isTrue?appConsumer.theme.buttonColor:"tranparent"
          }}
        >
          <MeIcon
            color={"#fff"}
            size={this.props.isTrue?15:0}
            icon={meCheck}
          />
        </TouchableWithoutFeedback>
      </TouchableWithoutFeedback>
        )}
      </AppConsumer>
    );
  }
}
