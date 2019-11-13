import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import Swiper from "react-native-web-swiper";
import PlaylistItem from "../components/home/PlaylistItem";
import SliderDot from "../components/common/SliderDot";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import SongItem from "../components/home/SongItem";
import SliderItem from "../components/common/SliderItem";

import { CollapsibleHeaderScrollView } from "react-native-collapsible-header-views";


import SectionTitle from "../components/home/SectionTitle";
import HomeHeader from "../components/home/HomeHeader";
import ArtistItem from "../components/home/ArtistItem";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
  }
  handleScroll = event => {
    this.setState({ scrollY: event.nativeEvent.contentOffset.y });
  };
  render() {
    return (
      <View style={{flex:1,paddingBottom:70}}>
        <View style={{background:"#fff",height:getStatusBarHeight()}}/>
      <CollapsibleHeaderScrollView
      style={{flex:1}}
        onScroll={this.handleScroll}
        CollapsibleHeaderComponent={<HomeHeader scrollY={this.state.scrollY} />}
        headerHeight={40}
        statusBarHeight={0}
      >
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
              nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
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
        <SectionTitle title={"Playlist gần đây"} />
        <View>
          <ScrollView
            style={{ shadowOffset: { width: 10, height: 10 } }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <PlaylistItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Nửa hồn thương đau"}
              actorName={"Thu Phương"}
            />
            <PlaylistItem
              imgUrl={{
                uri:
                  "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
              }}
              name={"Giấc mộng trong mơ"}
              actorName={"Hồng Nhung"}
            />
            <PlaylistItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Con đi đâu để thấy hoa bay"}
              actorName={"Nhiều ca sĩ"}
            />
            <PlaylistItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Đi đu đưa đi"}
              actorName={"Tuấn Hưng"}
            />
          </ScrollView>
        </View>

        <SectionTitle title={"Bài hát đề xuất"} />

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

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Playlist")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Playlist")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Playlist")}
        />
      </CollapsibleHeaderScrollView>
      </View>
    );
  }
}
