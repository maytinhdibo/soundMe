import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { searchStyle } from "../styles/searchStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import { CollapsibleHeaderScrollView } from "react-native-collapsible-header-views";
import SongItem from "../components/home/SongItem";
import MeIcon from "../icons/MeIcon";
import meArrowRight from "../icons/icon-pack/meArrowRight";

class RecommentTag extends Component {
  render() {
    return (
      <Text
        style={[
          {
            borderRadius: 18,
            backgroundColor: "rgba(156,156,156,0.5)",
            padding: 9,
            paddingHorizontal: 15,
            marginBottom: 6,
            marginEnd: 6,
          },
          textStyle.bold,
        ]}
      >
        {this.props.content}
      </Text>
    );
  }
}

class SongResultItem extends Component {
  render() {
    return (
      <View style={searchStyle.songItem}>
        <Image
          source={this.props.imgUrl}
          style={{
            height: 50,
            width: 50,
            borderRadius: 9,
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: "#32f",
            justifyContent: "center",
            marginStart: 5,
          }}
        >
          <Text
            numberOfLines={1}
            style={[
              {
                padding: 6,
                paddingBottom: 0,
                fontSize: 16,
              },
              textStyle.bold,
            ]}
          >
            {this.props.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              {
                padding: 6,
                paddingTop: 0,
                color: "#777",
                fontSize: 14,
              },
              textStyle.regular,
            ]}
          >
            {this.props.actorName}
          </Text>
        </View>
      </View>
    );
  }
}

class AlbumResultItem extends Component {
  render() {
    return (
      <View style={searchStyle.albumItem}>
        <Image
          source={this.props.imgUrl}
          style={{
            height: 65,
            width: 65,
            borderRadius: 9,
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: "#32f",
            justifyContent: "center",
            marginStart: 5,
          }}
        >
          <Text
            numberOfLines={1}
            style={[
              {
                padding: 6,
                paddingBottom: 0,
                fontSize: 16,
              },
              textStyle.bold,
            ]}
          >
            {this.props.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              {
                padding: 6,
                paddingTop: 0,
                color: "#777",
                fontSize: 14,
              },
              textStyle.regular,
            ]}
          >
            {this.props.actorName}
          </Text>
        </View>
      </View>
    );
  }
}

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
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
              Tìm kiếm
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            margin: 16,
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: "rgba(200,200,200,0.3)",
          }}
        >
          <TextInput
            placeholder="Khám phá bài hát mà bạn ưa thích..."
            style={{
              flex: 1,
              height: 50,
              borderWidth: 0,
              fontSize: 16,
              padding: 12,
              paddingHorizontal: 15,
            }}
            onChangeText={text => this.setState({ searchValue: text })}
            value={this.searchValue}
          />
          {this.state.searchValue.length > 0 ? (
            <TouchableOpacity
              onPress={() => this.setState({ searchValue: "" })}
              style={{
                width: 45,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius:12.5,
                  justifyContent:"center",
                  alignItems: "center",
                  backgroundColor: "rgba(11,11,11,0.3)",
                }}
              >
              <MeIcon size={12.5} color="#fff" icon={meArrowRight} />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
        {this.state.searchValue.length == 0 ? (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingTop: 6,
              paddingHorizontal: 16,
            }}
          >
            <RecommentTag content="EDM" />
            <RecommentTag content="Hồng Nhung" />
            <RecommentTag content="Bích Phương" />
            <RecommentTag content="Nghe nói anh sắp kết hôn rồi" />
            <RecommentTag content="Lối cũ ta về" />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              padding: 12,
              paddingHorizontal: 14,
              alignContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Text style={[textStyle.bold, { fontSize: 18, marginBottom: 9 }]}>
              Bài hát
            </Text>
            <SongResultItem
              imgUrl={{
                uri:
                  "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
              }}
              name={"Giấc mộng trong mơ"}
              actorName={"Hồng Nhung"}
            />
            <SongResultItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Con đi đâu để thấy hoa bay"}
              actorName={"Nhiều ca sĩ"}
            />
            <SongResultItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Đi đu đưa đi"}
              actorName={"Tuấn Hưng"}
            />
            <Text style={[textStyle.bold, { fontSize: 18, marginBottom: 9 }]}>
              Album
            </Text>
            <ScrollView horizontal={true}>
              <AlbumResultItem
                imgUrl={require("../assets/nuocmat.jpg")}
                name={"Đi đu đưa đi"}
                actorName={"Tuấn Hưng"}
              />
              <AlbumResultItem
                imgUrl={{
                  uri:
                    "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg",
                }}
                name={"Đi đu đưa đi"}
                actorName={"Tuấn Hưng"}
              />
              <AlbumResultItem
                imgUrl={require("../assets/nuocmat.jpg")}
                name={"Con đi đâu để thấy hoa bay"}
                actorName={"Nhiều ca sĩ"}
              />
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
