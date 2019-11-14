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

import SongItem from "../components/home/SongItem";
import MeIcon from "../icons/MeIcon";
import meArrowRight from "../icons/icon-pack/meArrowRight";

import AlbumResultItem from "../components/search/AlbumResultItem";
import RecommendTag from "../components/search/RecommendTag";
import SongResultItem from "../components/search/SongResultItem";
export default class Search extends Component {
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
            style={[
              {
                flex: 1,
                height: 50,
                borderWidth: 0,
                fontSize: 16,
                padding: 12,
                paddingHorizontal: 15,
              },
              textStyle.medium,
            ]}
            onChangeText={text => this.setState({ searchValue: text })}
            value={this.state.searchValue}
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
                  borderRadius: 12.5,
                  justifyContent: "center",
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
            <RecommendTag onRecommend={this.recommend} content="EDM" />
            <RecommendTag onRecommend={this.recommend} content="Hồng Nhung" />
            <RecommendTag onRecommend={this.recommend} content="Bích Phương" />
            <RecommendTag
              onRecommend={this.recommend}
              content="Nghe nói anh sắp kết hôn rồi"
            />
            <RecommendTag onRecommend={this.recommend} content="Lối cũ ta về" />
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
              name={"Mùa thu lá xanh"}
              actorName={"Thùy Trinh"}
            />
            <SongResultItem
              imgUrl={{
                uri:
                  "https://avatar-nct.nixcdn.com/singer/avatar/2017/09/15/b/8/c/8/1505490332212.jpg",
              }}
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
