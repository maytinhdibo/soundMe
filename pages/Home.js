import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";

import Swiper from "react-native-web-swiper";
import PlaylistItem from "../components/home/PlaylistItem";
import SliderDot from "../components/common/SliderDot";
import SongItem from "../components/home/SongItem";
import SliderItem from "../components/common/SliderItem";

import SectionTitle from "../components/home/SectionTitle";
import HomeHeader from "../components/home/HomeHeader";
import ArtistItem from "../components/home/ArtistItem";

import { homeStyle } from "../styles/homeStyle";
import { textStyle } from "../styles/textStyle";

import MeIcon from "../icons/MeIcon";
import meSearch from "../icons/icon-pack/meSearch";

import { getStatusBarHeight } from "react-native-status-bar-height";
import SectionBadge from "../components/home/SectionBadge";

// import {Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title} from "native-base";

const NAVBAR_HEIGHT = 45;
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const COLOR = "rgb(45,181,102)";

export default class NewHome extends Component {
  scroll = new Animated.Value(0);
  headerY;

  constructor(props) {
    super(props);
    this.headerY = Animated.multiply(
      Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT),
      -1
    );
    this.state = {
      scrollY: 0,
    };
  }

  handleScroll = event => {
    this.setState({ scrollY: event.nativeEvent.contentOffset.y });
  };

  scrollTo = y => {
    this.setState({ scrollY: y });
    this.listView.getNode().scrollTo({ y, animated: true });
  };

  componentDidUpdate() {
    try {
      if (this.state.scrollY > 480) {
        this.badgeView.getNode().scrollToEnd();
      } else {
        this.badgeView.getNode().scrollTo({ x: 0, animated: true });
      }
    } catch {}
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: getStatusBarHeight(),
            backgroundColor: "#fff",
            elevation: 0,
          }}
        ></View>
        <View style={{ flex: 1 }}>
          {/* <Text>{this.state.scrollY}</Text> */}
          <Animated.View
            style={{
              width: "100%",
              position: "absolute",
              transform: [
                {
                  translateY: this.headerY,
                },
              ],
              elevation: -1,
              flex: 1,
              zIndex: 1,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 12,
                paddingRight: 9,
                marginBottom: 2,
                height: 45,
                justifyContent:"center",
                // backgroundColor:"#f32"
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    {
                      fontSize: 27,
                      fontWeight: "900",
                      justifyContent: "center",
                      alignItems:"center",
                      // backgroundColor:"#432"
                    },
                    textStyle.bold,
                  ]}
                >
                  Khám phá
                </Text>
              </View>
              <View
                style={{
                  width: 37,
                  height: 37,
                  borderRadius:20,
                  backgroundColor:"rgba(111,111,111,0.3)",
                  justifyContent: "center",
                  alignItems:"center",
                  alignSelf: "center",
                }}
              >
                <MeIcon icon={meSearch} size={22} color="#333" />
              </View>
            </View>

            <Animated.ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={ref => (this.badgeView = ref)}
              style={{
                flexDirection: "row",
                borderBottomWidth: this.state.scrollY > 40 ? 1 : 0,
                borderBottomColor: "#eee",
              }}
            >
              <SectionBadge
                scrollTo={this.scrollTo}
                title={"Playlist gần đây"}
                target={0}
                min={0}
                max={300}
                scrollY={this.state.scrollY}
              />
              <SectionBadge
                scrollTo={this.scrollTo}
                title={"Bài hát đề xuất"}
                target={400}
                min={300}
                max={480}
                scrollY={this.state.scrollY}
              />
              <SectionBadge
                scrollTo={this.scrollTo}
                title={"Nghệ sĩ yêu thích"}
                target={998}
                min={480}
                max={999}
                scrollY={this.state.scrollY}
              />
            </Animated.ScrollView>
          </Animated.View>

          <Animated.ScrollView
            ref={ref => (this.listView = ref)}
            scrollEventThrottle={1}
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{ zIndex: 0, height: "100%", elevation: -2 }}
            contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
              { useNativeDriver: true }
              // {
              //   listener: event => {
              //     this.handleScroll(event);
              //   },
            )}
            onScrollEndDrag={this.handleScroll}
            onMomentumScrollEnd={this.handleScroll}
            overScrollMode="never"
          >
            <Animated.View
              style={[
                {
                  flex: 1,
                  zIndex: 1,
                  width: "100%",
                  // backgroundColor: "#f32",
                  marginTop: 32,
                },
                // Platform.OS === "ios" ? { paddingTop: 20 } : null,
              ]}
            >
              <ScrollView>
                <View style={homeStyle.slideShow}>
                  <Swiper
                    timeout={4.5}
                    from={0}
                    slideWrapperStyle={{ paddingBottom: 20 }}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      DotComponent: ({ index, isActive, onPress }) => (
                        <SliderDot onPress={onPress} isActive={isActive} />
                      ),
                      prevPos: "left",
                      nextPos: "right",
                      nextTitle: ">",
                      nextTitleStyle: {
                        color: "red",
                        fontSize: 24,
                        fontWeight: "500",
                      },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity
                          style={{ flex: 1, height: "100%" }}
                          onPress={onPress}
                        >
                          <View style={{ height: 150, width: 40 }}></View>
                        </TouchableOpacity>
                      ),
                      NextComponent: ({ onPress }) => (
                        <TouchableOpacity
                          style={{ flex: 1, height: "100%" }}
                          onPress={onPress}
                        >
                          <View style={{ height: 150, width: 40 }}></View>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                    <SliderItem
                      index={1}
                      image={{
                        uri:
                          "https://avatar-nct.nixcdn.com/mv/2019/10/23/f/2/2/5/1571805287222_840.jpg",
                      }}
                    />

                    <SliderItem
                      index={1}
                      image={{
                        uri:
                          "https://avatar-nct.nixcdn.com/mv/2019/10/17/d/f/d/6/1571316241353_840.jpg",
                      }}
                    />

                    <SliderItem
                      index={1}
                      image={{
                        uri:
                          "https://avatar-nct.nixcdn.com/mv/2019/10/21/b/3/9/8/1571633065834_840.jpg",
                      }}
                    />
                  </Swiper>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("TopPlaylist")}
                >
                  <SectionTitle title={"Playlist gần đây"} />
                </TouchableOpacity>
                <View>
                  <ScrollView
                    style={{ shadowOffset: { width: 10, height: 10 } }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <PlaylistItem
                      navigation={this.props.navigation}
                      imgUrl={require("../assets/nuocmat.jpg")}
                      name={"Nửa hồn thương đau"}
                      actorName={"Thu Phương"}
                    />
                    <PlaylistItem
                      navigation={this.props.navigation}
                      imgUrl={{
                        uri:
                          "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
                      }}
                      name={"Giấc mộng trong mơ"}
                      actorName={"Hồng Nhung"}
                    />
                    <PlaylistItem
                      navigation={this.props.navigation}
                      imgUrl={require("../assets/nuocmat.jpg")}
                      name={"Con đi đâu để thấy hoa bay"}
                      actorName={"Nhiều ca sĩ"}
                    />
                    <PlaylistItem
                      navigation={this.props.navigation}
                      imgUrl={require("../assets/nuocmat.jpg")}
                      name={"Đi đu đưa đi"}
                      actorName={"Tuấn Hưng"}
                    />
                  </ScrollView>
                </View>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("TopSong")}
                >
                  <SectionTitle title={"Bài hát đề xuất"} />
                </TouchableOpacity>
                <View>
                  <SongItem
                    imgUrl={require("../assets/nuocmat.jpg")}
                    name={"Nửa hồn thương đau"}
                    actorName={"Thu Phương"}
                  />
                  <SongItem
                    imgUrl={{
                      uri:
                        "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
                    }}
                    name={"Giấc mộng trong mơ"}
                    actorName={"Hồng Nhung"}
                  />
                  <SongItem
                    imgUrl={require("../assets/nuocmat.jpg")}
                    name={"Con đi đâu để thấy hoa bay"}
                    actorName={"Nhiều ca sĩ"}
                  />
                  <SongItem
                    imgUrl={require("../assets/nuocmat.jpg")}
                    name={"Đi đu đưa đi"}
                    actorName={"Tuấn Hưng"}
                  />
                </View>

                <SectionTitle title={"Nghệ sĩ yêu thích"} />
                <View>
                  <ScrollView
                    style={{ shadowOffset: { width: 10, height: 10 } }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <ArtistItem
                      imgUrl={require("../assets/nuocmat.jpg")}
                      name={"Thu Phương"}
                    />
                    <ArtistItem
                      imgUrl={{
                        uri:
                          "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
                      }}
                      name={"Hồng Nhung"}
                    />
                    <ArtistItem
                      imgUrl={require("../assets/nuocmat.jpg")}
                      name={"Tuấn Hưng"}
                    />
                    <ArtistItem
                      imgUrl={require("../assets/nuocmat.jpg")}
                      name={"Bích Phương"}
                    />
                  </ScrollView>
                </View>
              </ScrollView>
            </Animated.View>
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}
