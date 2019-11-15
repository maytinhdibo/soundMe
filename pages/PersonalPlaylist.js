import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { textStyle } from "../styles/textStyle";
import CardView from "react-native-cardview";
import SongItem from "../components/playlist/SongItem";
import Header from "../components/common/Header";

import Modal from "react-native-translucent-modal";

import MeIcon from "../icons/MeIcon";
import meTrash from "../icons/icon-pack/meTrash";
import meArrowLeft from "../icons/icon-pack/meArrowLeft";

import { AppConsumer } from "../AppContextProvider";

export default class PersonalPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeModal: false,
    };
  }
  async componentDidMount() {
    const willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload => {
        //change return with theme (assign for duchm)
        StatusBar.setBarStyle("dark-content");
      }
    );
    const willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      payload => {
        StatusBar.setBarStyle("light-content");
      }
    );
  }

  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.backgroundColorPlaylist,
            }}
          >
            <Header
              leftComponent={
                <TouchableOpacity
                  style={{ width: 50, alignItems: "center" }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <MeIcon size={20} color={"#fff"} icon={meArrowLeft} />
                </TouchableOpacity>
              }
              titleComponent={
                <View>
                  <Text
                    style={[{ fontSize: 18, color: "#fff" }, textStyle.bold]}
                  >
                    Danh sách phát
                  </Text>
                </View>
              }
              rightComponent={
                <TouchableOpacity
                  style={{ width: 50, alignItems: "center" }}
                  onPress={() => this.setState({removeModal:true})}
                >
                  <MeIcon size={20} color={"#fff"} icon={meTrash} />
                </TouchableOpacity>
              }
              color={appConsumer.theme.colorPrimary}
              style={{ backgroundColor: "#453" }}
            />

            <Modal
              animationType="fade"
              backdropColor="transparent"
              transparent={true}
              visible={this.state.removeModal}
              onRequestClose={() => {
                this.setState({ removeModal: false });
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setState({ removeModal: false })}
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
                          backgroundColor:
                            appConsumer.theme.backgroundColorPrimary,
                        }}
                      >
                        <Text
                          style={[
                            {
                              fontSize: 18,
                              marginBottom: 9,
                              color: appConsumer.theme.colorPrimary,
                            },
                            textStyle.bold,
                          ]}
                        >
                          Tạo mới
                        </Text>
                        <Text
                          style={[
                            { color: appConsumer.theme.colorPrimary },
                            textStyle.regular,
                          ]}
                        >
                          Bạn có chắc chắn xóa danh sách phát này không?
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: 9,
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={{ padding: 6, paddingHorizontal: 9 }}
                          >
                            <Text
                              style={[
                                { color: appConsumer.theme.colorPrimary },
                                textStyle.bold,
                              ]}
                            >
                              Xác nhận
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{ padding: 6, paddingHorizontal: 9 }}
                            onPress={() => this.setState({ removeModal: false })}
                          >
                            <Text
                              style={[
                                { color: appConsumer.theme.colorPrimary },
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

            <ScrollView
              style={{
                flex: 1,
                padding: 9,
                backgroundColor: appConsumer.theme.backgroundColorPrimary,
              }}
            >
              <SongItem
                idx={1}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={2}
                name="Duyên Dương"
                actorName="Hoàng Thùy Linh"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
              <SongItem
                idx={3}
                name="Duyên Âm"
                actorName="Hoàng Thùy Linh ft Binz"
              />
            </ScrollView>
          </View>
        )}
      </AppConsumer>
    );
  }
}
