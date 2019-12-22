import React, { Component } from "react";
import {withNavigation } from "react-navigation";
import {
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { homeStyle } from "../../styles/homeStyle";

import mePlay from "../../icons/icon-pack/mePlay";
import mePause from "../../icons/icon-pack/mePause";
import MeIcon from "../../icons/MeIcon";

import MarqueeText from "react-native-marquee";
import { textStyle } from "../../styles/textStyle";
import { AppConsumer } from "../../AppContextProvider";


class SongItem extends Component {
  constructor(props) {
    super(props);  
  }

  componentDidMount() {
  }


  renderPlayerPlayPause = () => {
    return this.context.playing == true ? (
      <MeIcon size={20} color={this.context.theme.buttonColor} icon={mePause} />
    ) : (
      <MeIcon size={20} color={this.context.theme.buttonColor} icon={mePlay} />
    );
  };
 


  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              width: Math.round(Dimensions.get("window").width),
              backgroundColor: appConsumer.theme.backgroundColorSecondary,
              // borderColor: appConsumer.theme.backgroundColorSecondary,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(111,111,111,0.1)",
                width: "100%",
                height: 3,
                opacity: 0.8,
              }}
            >
              <View
                style={{
                  backgroundColor: appConsumer.theme.buttonColor,
                  width: appConsumer.presentPosition/(appConsumer.duration+1)*100 + "%",
                  borderBottomRightRadius: 3,
                  borderTopRightRadius: 3,
                  height: "100%",
                }}
              ></View>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <TouchableOpacity
                onPress= {()=>this.props.navigation.navigate("Player",{"togglePlay":false})}
                style={{
                  flex: 2,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <MarqueeText
                  style={{
                    fontSize: 14,
                    fontFamily: "Quicksand-Bold",
                    color: appConsumer.theme.colorPrimary,
                  }}
                  duration={6000}
                  marqueeOnStart
                  loop
                >
                  {appConsumer.songState.title}
                </MarqueeText>

                <Text
                  style={[
                    textStyle.regular,
                    { fontSize: 12, color: appConsumer.theme.colorSecondary },
                  ]}
                >
                  {appConsumer.songState.artist["name"]}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  marginRight: 5,
                }}
              >
                <TouchableOpacity
                onPress= {this.context.onPlayBtn}
                style={{
                  flex: 2,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                {this.renderPlayerPlayPause(this.context.playing)}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
export default withNavigation(SongItem);
SongItem.contextType = AppConsumer
