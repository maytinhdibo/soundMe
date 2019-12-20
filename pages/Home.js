import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Swiper from "react-native-swiper";
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
import { commonStyle } from "../styles/commonStyle";
import { ThemeContext, AppConsumer } from "../AppContextProvider";
import artists from "../assets/data/artists";
import playlists from "../assets/data/playlists"
import topmusic from "../assets/data/topmusic"
// import {Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title} from "native-base";

const NAVBAR_HEIGHT = 50;
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const COLOR = "rgb(45,181,102)";
class NewHome extends Component {
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
    //set style when open noti
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
    //dark or light font
  }

  handleScroll = event => {
    this.setState({ scrollY: event.nativeEvent.contentOffset.y });
  };

  scrollTo = y => {
    this.setState({ scrollY: y });
    this.listView.getNode().scrollTo({ y, animated: true });
  };
  componentDidUpdate() {

    changeNavigationBarColor(this.context.theme.backgroundColorSecondary);

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
            backgroundColor: this.context.theme.backgroundColorPrimary,
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
              backgroundColor: this.context.theme.backgroundColorPrimary,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 12,
                paddingRight: 9,
                marginBottom: 2,
                height: 50,
                justifyContent: "center",
                alignItems: "center",

                // backgroundColor:"#f32"
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    {
                      color: this.context.theme.colorPrimary,
                      fontSize: 27,
                      fontWeight: "900",
                      justifyContent: "center",
                      alignItems: "center",
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
                  borderRadius: 20,
                  backgroundColor: "rgba(111,111,111,0.3)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tìm kiếm')}>
                <MeIcon
                  icon={meSearch}
                  size={22}
                  color={this.context.theme.colorPrimary}
                />
                </TouchableOpacity>
              </View>
            </View>

            <Animated.ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={ref => (this.badgeView = ref)}
              style={{
                flexDirection: "row",
                borderBottomWidth: this.state.scrollY > 40 ? 1 : 0,
                borderBottomColor: this.context.theme.borderColor,
                color: this.context.theme.colorPrimary,
              }}
            >
              <SectionBadge
                style={{ color: this.context.theme.colorPrimary }}
                scrollTo={this.scrollTo}
                title={"Danh sách đề xuất"}
                target={0}
                min={0}
                max={300}
                scrollY={this.state.scrollY}
              />
              <SectionBadge
                scrollTo={this.scrollTo}
                title={"Top thịnh hành"}
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
                  backgroundColor: this.context.theme.backgroundColorPrimary,
                  marginTop: 32,
                },
                // Platform.OS === "ios" ? { paddingTop: 20 } : null,
              ]}
            >
              <ScrollView>
                <View style={homeStyle.slideShow}>
                  <Swiper
                    autoplay={true}
                    autoplayTimeout={3}
                    autoplayDirection={false}
                    dot={
                      <View
                        style={{
                          width: 8,
                          marginHorizontal: 2,
                          height: 8,
                          backgroundColor: "rgba(111,111,111,0.5)",
                          borderRadius: 8,
                        }}
                      ></View>
                    }
                    activeDot={
                      <View
                        style={{
                          width: 18,
                          marginHorizontal: 3,
                          height: 8,
                          backgroundColor: this.context.theme.buttonColor,
                          borderRadius: 8,
                        }}
                      ></View>
                    }
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
                  <SectionTitle title={"Danh sách đề xuất"} />
                </TouchableOpacity>
                <View>
                  <ScrollView
                    style={{ shadowOffset: { width: 10, height: 10 } }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View name="fake-margin" style={{ width: 7 }} />
                    {playlists.items.slice(0,5).map((item, key) => {
                      return (
                        <PlaylistItem
                          imgUrl={item.image}
                          name={item.name}
                          actorName={item.actorName}
                        />
                      );
                    })}

                    <View name="fake-margin" style={{ width: 7 }} />
                  </ScrollView>
                </View>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("TopSong")}
                >
                  <SectionTitle title={"Top thịnh hành"} />
                </TouchableOpacity>
                <View>

                  {topmusic.items.slice(0,5).map((item, key) => {
                    return (
                      <SongItem
                        imgUrl={item.image}
                        name={item.name}
                        actorName={item.actorName}
                      />
                    );
                  })}
                </View>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("TopArtist")}
                >
                  <SectionTitle title={"Nghệ sĩ yêu thích"} />
                </TouchableOpacity>
                <View>
                  <ScrollView
                    style={{ shadowOffset: { width: 10, height: 10 } }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View name="fake-margin" style={{ width: 7 }} />

                    {artists.items.slice(0,6).map((item, key) => {
                      return (
                        <ArtistItem
                          imgUrl={item.image}
                          name={item.name}
                        />
                      );
                    })}
                    <View name="fake-margin" style={{ width: 7 }} />
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
NewHome.contextType = ThemeContext;

export default (NewHome);