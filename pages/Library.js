import React, { Component } from "react";
import {
  ToastAndroid,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { searchStyle } from "../styles/searchStyle";
import { createAppContainer } from "react-navigation";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import CardView from "react-native-cardview";

import Modal from "react-native-translucent-modal";
import Swiper from "react-native-swiper";
import { commonStyle } from "../styles/commonStyle";
import {ThemeContext} from "../AppContextProvider";
import artists from "../assets/data/artists"
import playlists from "../assets/data/playlists"
import libraryData from "../assets/data/libraryData"

class PlayListLibItem extends Component {
  render() {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 9 }}
      >
        <CardView
          cardElevation={2}
          cornerRadius={9}
          style={{
            backgroundColor: "#eee",
            height: 60,
            width: 60,
            marginRight: 14,
          }}
        >
          <Image
            source={this.props.imgUrl || require("../assets/sm3-01.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </CardView>
        <View style={{ flexDirection: "column" }}>
          <Text style={[{ fontSize: 15, color: this.context.theme.colorPrimary }, textStyle.bold]}>
            {this.props.name}
          </Text>
          <Text style={[{ fontSize: 14, color: this.context.theme.colorSecondary }, textStyle.regular]}>
            {this.props.count} bài hát
          </Text>
        </View>
      </View>
    );
  }
}
PlayListLibItem.contextType=ThemeContext;

class AlbumLibItem extends Component {
  render() {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 9 }}
      >
        <CardView
          cardElevation={2}
          cornerRadius={9}
          style={{
            backgroundColor: "#eee",
            height: 60,
            width: 60,
            marginRight: 14,
          }}
        >
          <Image
            source={this.props.imgUrl || require("../assets/sm3-01.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </CardView>
        <View style={{ flexDirection: "column" }}>
          <Text style={[{ fontSize: 15, color: this.context.theme.colorPrimary }, textStyle.bold]}>
            {this.props.name}
          </Text>
          <Text style={[{ fontSize: 14, color: this.context.theme.colorSecondary }, textStyle.regular]}>
            {this.props.artist}
          </Text>
        </View>
      </View>
    );
  }
}
AlbumLibItem.contextType=ThemeContext;

class ArtistLibItem extends Component {
  render() {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 9 }}
      >
        <CardView
          cardElevation={2}
          cornerRadius={30}
          style={{
            backgroundColor: "#eee",
            height: 60,
            width: 60,
            marginRight: 14,
          }}
        >
          <Image
            source={this.props.imgUrl || require("../assets/thuphuong.jpg")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </CardView>
        <View style={{ flexDirection: "column" }}>
          <Text style={[{ fontSize: 15, color: this.context.theme.colorPrimary }, textStyle.bold]}>
            {this.props.name}
          </Text>
          <Text style={[{ fontSize: 13, color: this.context.theme.colorSecondary }, textStyle.regular]}>
            {this.props.follower} người thích
          </Text>
        </View>
      </View>
    );
  }
}
ArtistLibItem.contextType=ThemeContext;

class SongRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
      playlistName: ""
    };
  }

  createNewPlaylist = () => {
    this.context.createNewPlaylist(this.state.playlistName)
    this.setState({playlistName: "", addModal: false})
    ToastAndroid.showWithGravity(
      "Đã tạo danh sách phát "+this.context.libraryState.playlist[this.context.libraryState.playlist.length-1].playlistName,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }

  render() {
    return (
      <View style={{ padding: 7, paddingHorizontal: 16 }}>
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
                      backgroundColor: this.context.theme.backgroundColorPrimary,
                    }}
                  >
                    <Text
                      style={[
                        { fontSize: 18, marginBottom: 9, color: this.context.theme.colorPrimary},
                        textStyle.bold,
                      ]}
                    >
                      Tạo mới
                    </Text>
                    <TextInput
                      style={[
                        {
                          borderRadius: 6,
                          padding: 6,
                          backgroundColor: "rgba(111,111,111,0.2)",
                         color: this.context.theme.colorPrimary
                        },
                        textStyle.regular,
                      ]}
                      placeholderTextColor="#999" 
                      placeholder={"Tên danh sách mới..."}
                      value={this.state.playlistName}
                      onChangeText={(playlistName) => this.setState({playlistName})}
                    />
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
                        <Text style={[{color: this.context.theme.colorPrimary},textStyle.bold]} onPress={()=>{this.createNewPlaylist()}}>Tạo mới</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ padding: 6, paddingHorizontal: 9 }}
                        onPress={() => this.setState({ addModal: false })}
                      >
                        <Text style={[{color: this.context.theme.colorPrimary},textStyle.bold]}>Hủy</Text>
                      </TouchableOpacity>
                    </View>
                  </CardView>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <TouchableWithoutFeedback
          onPress={() => this.setState({ addModal: true })}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 9,
            }}
          >
            <CardView
              cardElevation={2}
              cornerRadius={9}
              style={{
                backgroundColor: "#eee",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 14,
              }}
            >
              <Text style={[{ fontSize: 32, color: "#aaa" }]}>+</Text>
            </CardView>
            <Text style={[{ fontSize: 15 ,color:this.context.theme.colorPrimary}, textStyle.bold]}>
              Tạo danh sách phát mới
            </Text>
          </View>
        </TouchableWithoutFeedback>
        
        {libraryData.data.map((item, key) => {
          return (
            <TouchableWithoutFeedback
              style={{ height: 100, width: 100, backgroundColor: "#421" }}
              onPress={() => {
                console.log("lib pressed")
                this.context.changeLibraryState(item.playlist)
                this.props.navigation.navigate("PersonalPlaylist")
              }}
              key={key}
            >
              <View>
                <PlayListLibItem count={item.playlist.length} name={item.playlistName} imgUrl={item.image}/>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    );
  }
}
SongRoute.contextType=ThemeContext;

const ArtistRoute = () => (
  <ScrollView>
    <View style={{ padding: 7, paddingHorizontal: 16 }}>
      {artists.items.map((item, key) => {
        return (<ArtistLibItem name={item.name} follower={item.numberLike} imgUrl={item.image} key={key}/>)
      })}
    </View>
  </ScrollView>
  
);

const AlbumRoute = () => (
  <ScrollView>
    <View style={{ padding: 7, paddingHorizontal: 16 }}>
      {playlists.items.map((item, key) => {
        return (
        <AlbumLibItem
          key={key}
          imgUrl={item.image}
          artist={item.actorName}
          name={item.name}
        />)
      })}
      
    </View>
  </ScrollView>
);

class Tabs extends Component {
  render() {
    const routes = ["Bài hát", "Nghệ sĩ", "Album"];
    return (
      <View style={{ flexDirection: "row", padding: 12 }}>
        {routes.map((route, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                const delta = index - this.props.index;
                if (delta != 0) this.props.swipeTo(delta);
              }}
            >
              <View
                style={{
                  padding: 9,
                  paddingHorizontal: 12,
                  marginEnd: 6,
                  backgroundColor:
                    this.props.index == index ? this.context.theme.buttonColor : "transparent",
                  color: "#fff",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={[
                    {
                      fontSize: 14,
                      color: this.props.index == index ? "#fff" : "#777",
                    },
                    textStyle.bold,
                  ]}
                >
                  {route}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

Tabs.contextType=ThemeContext;

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  swipeTo = (value, page) => {
    this.swiper.scrollBy(value);
    this.setState({ page });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.context.theme.backgroundColorPrimary, }}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            marginBottom: 2,
            paddingTop: getStatusBarHeight(),
            backgroundColor: this.context.theme.backgroundColorPrimary,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={[commonStyle.header, textStyle.bold, {color: this.context.theme.colorPrimary}]}>Thư viện</Text>
          </View>
        </View>
        {/* <TabContainer /> */}
        <Tabs swipeTo={this.swipeTo} index={this.state.page} />
        <Swiper
          ref={ref => (this.swiper = ref)}
          index={0}
          onIndexChanged={index => {
            this.setState({ page: index });
          }}
          showsPagination={false}
        >
          <SongRoute navigation={this.props.navigation} />
          <ArtistRoute />
          <AlbumRoute />
        </Swiper>
      </View>
    );
  }
}
Library.contextType=ThemeContext;