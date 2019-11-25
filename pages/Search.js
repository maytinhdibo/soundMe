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
import meSearch from "../icons/icon-pack/meSearch";

import AlbumResultItem from "../components/search/AlbumResultItem";
import RecommendTag from "../components/search/RecommendTag";
import SongResultItem from "../components/search/SongResultItem";
import ArtistResultItem from "../components/search/ArtistResultItem";
import { commonStyle } from "../styles/commonStyle";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.inputText = React.createRef();
  }
  recommend = value => {
    this.setState({ searchValue: value });
  };

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", () =>
      setTimeout(() => {
        this.inputText.focus();
      }, 1)
    );
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            this.state.searchValue.length == 0 ? getStatusBarHeight() : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            display: this.state.searchValue.length == 0 ? "flex" : "none",
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={[commonStyle.header, textStyle.bold]}>Tìm kiếm</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            margin: this.state.searchValue.length == 0 ? 16 : 0,
            marginTop: this.state.searchValue.length == 0 ? 10 : 0,
            paddingTop:
              this.state.searchValue.length == 0 ? 0 : getStatusBarHeight(),
            borderRadius: this.state.searchValue.length == 0 ? 15 : 0,
            backgroundColor: "rgba(200,200,200,0.3)",
          }}
        >
          <View
            style={{
              width: 40,
              alignItems: "flex-end",
              justifyContent: "center",
              display: this.state.searchValue.length == 0 ? "none" : "flex",
            }}
          >
            <MeIcon size={20} color="#555" icon={meSearch} />
          </View>
          <TextInput
            autoCapitalize="none"
            placeholder="Khám phá bài hát mà bạn ưa thích..."
            ref={ref => (this.inputText = ref)}
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
          <ScrollView
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
            <ScrollView
              style={{ paddingBottom: 6 }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
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
            <Text
              style={[
                textStyle.bold,
                { fontSize: 18, marginTop: 9, marginBottom: 9 },
              ]}
            >
              Nghệ sĩ
            </Text>
            <ScrollView horizontal={true}>
              <ArtistResultItem
                name="Hoạ My"
                imgUrl={require("../assets/hongnhung.jpg")}
              />
              <ArtistResultItem
                name="Erik"
                imgUrl={require("../assets/thanhlam.jpg")}
              />
              <ArtistResultItem
                name="Ngọc Khuê"
                imgUrl={require("../assets/thuphuong.jpg")}
              />
            </ScrollView>
          </ScrollView>
        )}
      </View>
    );
  }
}
