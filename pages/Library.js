import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { searchStyle } from "../styles/searchStyle";
import { createAppContainer } from "react-navigation";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import CardView from "react-native-cardview";

import Modal from "react-native-translucent-modal";

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
            source={this.props.imgUrl || require("../assets/music.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </CardView>
        <View style={{ flexDirection: "column" }}>
          <Text style={[{ fontSize: 15 }, textStyle.bold]}>
            {this.props.name}
          </Text>
          <Text style={[{ fontSize: 14, color: "#777" }, textStyle.regular]}>
            {this.props.count} bài hát
          </Text>
        </View>
      </View>
    );
  }
}

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
            source={this.props.imgUrl || require("../assets/music.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              width: "100%",
            }}
          />
        </CardView>
        <View style={{ flexDirection: "column" }}>
          <Text style={[{ fontSize: 15 }, textStyle.bold]}>
            {this.props.name}
          </Text>
          <Text style={[{ fontSize: 14, color: "#777" }, textStyle.regular]}>
            {this.props.artist}
          </Text>
        </View>
      </View>
    );
  }
}

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
          <Text style={[{ fontSize: 15 }, textStyle.bold]}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}

class SongRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
    };
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
                      backgroundColor: "#fff",
                    }}
                  >
                    <Text
                      style={[
                        { fontSize: 18, marginBottom: 9 },
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
                          paddingTop: 9,
                          backgroundColor: "rgba(111,111,111,0.1)",
                        },
                        textStyle.regular,
                      ]}
                      placeholder={"Tên danh sách mới..."}
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
                        <Text style={[textStyle.bold]}>Tạo mới</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ padding: 6, paddingHorizontal: 9 }}
                        onPress={() => this.setState({ addModal: false })}
                      >
                        <Text style={[textStyle.bold]}>Hủy</Text>
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
            <Text style={[{ fontSize: 15 }, textStyle.bold]}>
              Tạo danh sách phát mới
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <PlayListLibItem count={10} name={"Nhạc buồn"} />
        <PlayListLibItem count={5} name={"Vinahouse quẩy tung chảo"} />
        <PlayListLibItem count={2} name={"Oppa Idol"} />
      </View>
    );
  }
}

const ArtistRoute = () => (
  <View style={{ padding: 7, paddingHorizontal: 16 }}>
    <ArtistLibItem name={"Thu Phương"} />
    <ArtistLibItem name={"Bích Phương"} />
    <ArtistLibItem name={"Trúc Nhân"} />
  </View>
);

const AlbumRoute = () => (
  <View style={{ padding: 7, paddingHorizontal: 16 }}>
    <AlbumLibItem
      imgUrl={require("../assets/nuocmat.jpg")}
      artist="Hoàng Thùy Linh"
      name={"Hoàng"}
    />
    <AlbumLibItem
      imgUrl={{
        uri:
          "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
      }}
      artist="Nhiều ca sĩ"
      name={"Tiếng Hát Thiên Thai"}
    />
    <AlbumLibItem
      imgUrl={require("../assets/nuocmat.jpg")}
      artist="Tâm 9"
      name={"Mỹ Tâm"}
    />
  </View>
);

class Tabs extends Component {
  navigationHandler = routeName => {
    this.props.navigation.navigate(routeName);
  };

  render() {
    const { navigation } = this.props;
    const routes = navigation.state.routes;

    return (
      <View style={{ flexDirection: "row", padding: 12 }}>
        {routes.map((route, index) => {
          console.log(routes);
          return (
            <TouchableWithoutFeedback
              onPress={() => this.navigationHandler(route)}
            >
              <View
                style={{
                  padding: 9,
                  paddingHorizontal: 12,
                  marginEnd: 6,
                  backgroundColor:
                    navigation.state.index === index
                      ? "#fe6f61"
                      : "transparent",
                  color: "#fff",
                  borderRadius: 20,
                }}
                key={route.key}
                focused={navigation.state.index === index}
                index={index}
              >
                <Text
                  style={[
                    {
                      fontSize: 14,
                      color: navigation.state.index === index ? "#fff" : "#777",
                    },
                    textStyle.bold,
                  ]}
                >
                  {route.routeName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    "Bài hát yêu thích": {
      screen: SongRoute,
    },
    "Ca sĩ": {
      screen: ArtistRoute,
    },
    Album: {
      screen: AlbumRoute,
    },
  },
  {
    tabBarPosition: "top",
    tabBarComponent: props => <Tabs {...props} />,
  }
);

const TabContainer = createAppContainer(TabNavigator);

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  recommend = value => {
    this.setState({ searchValue: value });
  };
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
              Thư viện
            </Text>
          </View>
        </View>
        <TabContainer />
      </View>
    );
  }
}