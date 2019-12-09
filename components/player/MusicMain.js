import React, { Component, useRef } from "react";
import {
  Animated,
  Dimensions,
  Slider,
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";

import MeIcon from "../../icons/MeIcon";
import mePlay from "../../icons/icon-pack/mePlay";
import meShare from "../../icons/icon-pack/meShare";

import { playerStyle } from "../../styles/playerStyle";
import { textStyle } from "../../styles/textStyle";
import { AppConsumer, ThemeContext } from "../../AppContextProvider";
import SoundPlayer from "react-native-sound-player";

import Modal from "react-native-translucent-modal";

import CardView from "react-native-cardview";
import meArrowDown from "../../icons/icon-pack/meArrowDown";
import meHeart from "../../icons/icon-pack/meHeart";
import meAddPlaylist from "../../icons/icon-pack/meAddPlaylist";
import { ScrollView } from "react-native-gesture-handler";

class PlayListLibItem extends Component {
  render() {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 9 }}
      >
        <View
          style={{
            backgroundColor: "#eee",
            height: 40,
            width: 40,
            marginRight: 14,
            borderRadius:4, 
            borderColor: "rgba(111,111,111,0.1)",
            borderWidth:1,
            overflow:"hidden"
          }}
        >
          <Image
            source={this.props.imgUrl || require("../../assets/music.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={[
              { fontSize: 13, color: this.context.theme.colorPrimary },
              textStyle.bold,
            ]}
          >
            {this.props.name}
          </Text>
          <Text
            style={[
              { fontSize: 12, color: this.context.theme.colorSecondary },
              textStyle.regular,
            ]}
          >
            {this.props.count} bài hát
          </Text>
        </View>
      </View>
    );
  }
}
PlayListLibItem.contextType = ThemeContext;

export default class MusicMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGeeseSeason: true,
      addModal: false
    };
  }

  secondToMinuteString = second => {
    if (second > 0) {
      let i = parseInt(second);
      return Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2);
    }
    return "0:00";
  };

  onSliderComplete = position => {
    this.context.updateState({ presentPosition: position });
    SoundPlayer.seek(parseInt(position));
    SoundPlayer.play();
    this.context.updateState({ playing: true });
  };

  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View style={{ flex: 1 }}>
            <Modal
              animationType="fade"
              backdropColor="transparent"
              transparent={true}
              visible={this.state.addModal}
              onRequestClose={() => {
                this.setState({ addModal: false });
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setState({ addModal: false })}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                >
                  <View>
                    <TouchableWithoutFeedback>
                      <CardView
                        cardElevation={40}
                        cornerRadius={9}
                        style={{
                          width: 300,
                          padding: 12,
                          paddingVertical: 19,
                          maxWidth: "90%",
                          backgroundColor: this.context.theme
                            .backgroundColorPrimary,
                        }}
                      >
                        <Text
                          style={[
                            {
                              fontSize: 18,
                              marginBottom: 9,
                              color: this.context.theme.colorPrimary,
                            },
                            textStyle.bold,
                          ]}
                        >
                          Thêm vào thư viện
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                          <TextInput
                            style={[
                              {
                                borderRadius: 6,
                                padding: 6,
                                flex: 1,
                                backgroundColor: "rgba(111,111,111,0.2)",
                                color: this.context.theme.colorPrimary,
                              },
                              textStyle.regular,
                            ]}
                            placeholderTextColor="#999"
                            placeholder={"Tên danh sách mới..."}
                          />
                          <View
                            style={{
                              backgroundColor: "rgba(111,111,111,0.2)",
                              width: 40,
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: 3,
                              borderRadius: 6,
                            }}
                          >
                            <Text
                              style={[
                                { fontSize: 24, color: "#aaa", marginTop: -6 },
                                textStyle.regular,
                              ]}
                            >
                              +
                            </Text>
                          </View>
                        </View>

                        <ScrollView style={{marginTop: 9, maxHeight:150}}>
                          <PlayListLibItem count={10} name={"Nhạc buồn"} />
                          <PlayListLibItem
                            count={10}
                            name={"Nhạc giao hưởng"}
                          />
                        </ScrollView>

                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: 9,
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={{ padding: 6, paddingHorizontal: 9 }}
                            onPress={() => this.setState({ addModal: false })}
                          >
                            <Text
                              style={[
                                { color: this.context.theme.colorPrimary },
                                textStyle.bold,
                              ]}
                            >
                              Hủy
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </CardView>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <View style={playerStyle.header}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{
                  // backgroundColor: "#938",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                }}
              >
                <MeIcon
                  size={25}
                  color={this.context.theme.colorPrimary}
                  icon={meArrowDown}
                />
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={[
                    playerStyle.nowPlaying,
                    textStyle.bold,
                    { color: this.context.theme.colorPrimary },
                  ]}
                >
                  Đang phát
                </Text>
              </View>

              <TouchableOpacity
                onPress={this.props.onShare}
                style={{
                  // backgroundColor: "#938",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                }}
              >
                <MeIcon
                  size={25}
                  color={this.context.theme.colorPrimary}
                  icon={meShare}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={[
                  playerStyle.songName,
                  textStyle.bold,
                  { color: this.context.theme.colorPrimary },
                ]}
              >
                {appConsumer.title}
              </Text>
              <Text
                style={[
                  playerStyle.artistName,
                  textStyle.regular,
                  { color: this.context.theme.colorPrimary },
                ]}
              >
                {appConsumer.artist["name"]}
              </Text>

              <View
                style={[
                  playerStyle.coverImage,
                  { borderRadius: 32, overflow: "hidden" },
                ]}
              >
                <Image
                  source={appConsumer.songImage}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </View>

              <View
                style={{
                  display:
                    Dimensions.get("window").height /
                      Dimensions.get("window").width >
                    1.8
                      ? "flex"
                      : "none",
                  height: 40,
                  marginTop: 9,
                  marginBottom: 24,
                }}
              >
                <Text
                  style={[
                    {
                      paddingVertical: 16,
                      fontSize: 16,
                      color: this.context.theme.colorPrimary,
                    },
                    textStyle.medium,
                  ]}
                >
                  {this.props.curLine}
                </Text>
              </View>

              <View style={{ flexDirection: "row", padding: 12 }}>
                {/* <View
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: "#ccc",
                    borderRadius: 5,
                  }}
                /> */}
                <View
                  style={{
                    width: 15,
                    height: 7,
                    marginHorizontal: 3,
                    backgroundColor: this.context.theme.buttonColor,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            {/* <View ref="process"> */}
            <View>
              <Slider
                minimumValue={0}
                maximumValue={appConsumer.duration}
                minimumTrackTintColor={this.context.theme.buttonColor}
                maximumTrackTintColor={this.context.theme.colorPrimary}
                thumbTintColor={this.context.theme.buttonColor}
                value={appConsumer.presentPosition}
                style={{ width: "100%" }}
                onSlidingComplete={position => this.onSliderComplete(position)}
              ></Slider>

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row-reverse",
                  padding: 14,
                  paddingTop: 0,
                }}
              >
                <Text
                  style={[
                    { color: this.context.theme.colorPrimary },
                    textStyle.bold,
                  ]}
                >
                  {this.secondToMinuteString(appConsumer.duration)}
                </Text>
                <Text
                  style={[
                    { color: this.context.theme.colorPrimary },
                    textStyle.bold,
                  ]}
                >
                  {this.secondToMinuteString(appConsumer.presentPosition)}
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                padding: 14,
                paddingTop: 0,
                paddingBottom: 25,
              }}
            >
              <TouchableOpacity onPress={()=>{this.setState({addModal:true})}}>
              <MeIcon
                size={25}
                color={this.context.theme.buttonColor}
                icon={meAddPlaylist}
              />
              </TouchableOpacity>

              <MeIcon
                size={25}
                color={this.context.theme.buttonColor}
                icon={meHeart}
              />
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}
MusicMain.contextType = ThemeContext;
