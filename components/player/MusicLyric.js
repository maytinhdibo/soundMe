import React, { Component } from "react";
import {
  ToastAndroid,
  Dimensions,
  Clipboard,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import MeIcon from "../../icons/MeIcon";
import mePlay from "../../icons/icon-pack/mePlay";
import meShare from "../../icons/icon-pack/meShare";

import { playerStyle } from "../../styles/playerStyle";
import { textStyle } from "../../styles/textStyle";

import {AppConsumer, ThemeContext} from "../../AppContextProvider";

import CardView from "react-native-cardview";
import meCopy from "../../icons/icon-pack/meCopy";

class Line extends Component {
  checkPos() {
    const props = this.props;
    var result = props.curTime >= props.start && props.curTime < props.stop;
    if (result) {
      props.curLine(props.content);
    }
    return result;
  }
  render() {
    const props = this.props;
    return (
      <View
        style={[
          { width: "100%", alignItems: "center" },
          this.props.lyricSelected.indexOf(props.idx) != -1
            ? { backgroundColor: "rgba(111,111,111,0.2)" }
            : null,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.selectLine(props.idx);
          }}
          style={[styles.lineWrapper, { width: "100%", alignItems: "center" }]}
        >
          <Text
            style={[
              textStyle.medium,
              styles.line,
               { color: this.checkPos() ?this.context.theme.buttonColor:this.context.theme.colorPrimary },
            ]}
          >
            
            {props.content}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Line.contextType=ThemeContext;


const data = [
  {
    start: 44,
    stop: 45.71,
    content: "Lời ru buồn",
  },
  {
    start: 45.71,
    stop: 48.46,
    content: "nghe mênh mang",
  },
  {
    start: 48.46,
    stop: 52.01,
    content: "mênh mang",
  },
  {
    start: 52.01,
    stop: 55.20,
    content: "sau lũy tre làng",
  },
  {
    start: 3,
    stop: 6,
    content: "khiến lòng tôi xôn xao",
  },
  {
    start: 6,
    stop: 24,
    content: "",
  },
  {
    start: 0,
    stop: 3,
    content: "Ngày lấy chồng",
  },
  {
    start: 3,
    stop: 6,
    content: "em đi qua con đê",
  },
  {
    start: 6,
    stop: 24,
    content: "con đê mòn lối cỏ về",
  },
  {
    start: 0,
    stop: 3,
    content: "có chú bướm vàng",
  },
  {
    start: 3,
    stop: 6,
    content: "bay theo em",
  },
  {
    start: 6,
    stop: 24,
    content: "",
  },
  {
    start: 0,
    stop: 3,
    content: "Bướm vàng",
  },
  {
    start: 3,
    stop: 6,
    content: "đã đậu trái mù u rồi",
  },
];

export default class MusicLyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: 0,
      lyricSelected: [],
      lyricData: data,
    };
  }
  componentDidMount() {
    var time = this.state.curTime;
  }
  curLine = value => {
    if (value != this.state.curLine) {
      this.props.curLine(value);
      this.setState({ curLine: value });
    }
  };
  selectLine = value => {
    var lines = this.state.lyricSelected;
    if (lines.indexOf(value) == -1) {
      lines.push(value);
    } else {
      var index = lines.indexOf(value);
      lines.splice(index, 1);
    }
    lines = lines.sort();
    this.setState({
      lyricSelected: lines,
    });
    console.log(lines);
  };
  copy = () => {
    const content = this.state.lyricSelected.map(key => {
      return this.state.lyricData[key].content;
    });
    Clipboard.setString(content.join("\n"));
    ToastAndroid.showWithGravity(
      "Đã sao chép lời bài hát",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    this.setState({
      lyricSelected: [],
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[playerStyle.header]}>
          <View style={{ width: 50 }} />
          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={[playerStyle.nowPlaying, textStyle.bold, {color:this.context.theme.colorPrimary}]}>
              Lời bài hát
            </Text>
          </View>
          {this.state.lyricSelected.length > 0 ? (
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.copy}
            >
              <MeIcon size={22} icon={meCopy} color={this.context.theme.buttonColor}/>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 50 }} />
          )}
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1, paddingVertical: 9}}
          >
            <View style={{ marginBottom: 9, alignItems: "center" }}>
              <Text style={[{ fontSize: 16, color: this.context.theme.colorPrimary }, textStyle.bold]}>
                Chia tay hoàng hôn
              </Text>
              <Text style={[{ fontSize: 16, color: this.context.theme.colorPrimary }, textStyle.medium]}>
                Ca sĩ: Thanh Lam
              </Text>
              <Text style={[{ fontSize: 16, color: this.context.theme.colorPrimary }, textStyle.medium]}>
                Sáng tác: NS Thuận Yến
              </Text>
            </View>

            {this.state.lyricData.map((line, index) => {
              return (
                <Line
                  key={index}
                  idx={index}
                  curLine={this.curLine}
                  lyricSelected={this.state.lyricSelected}
                  selectLine={this.selectLine}
                  curTime={this.context.presentPosition}
                  start={line.start}
                  stop={line.stop}
                  content={line.content}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

MusicLyric.contextType=ThemeContext;

const styles = StyleSheet.create({
  lineWrapper: {
    padding: 9,
  },
  line: {
    fontSize: 17,
    opacity: 0.8,
    color: "#888",
  },
});
