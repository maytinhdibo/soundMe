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

import CardView from "react-native-cardview";

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
            ? { backgroundColor: "rgba(111,111,111,0.1)" }
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
              this.checkPos() ? { color: "#000" } : null,
            ]}
          >
            {props.content}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const data = [
  {
    start: 0,
    stop: 10,
    content: "Ru mãi ngàn năm",
  },
  {
    start: 10,
    stop: 18,
    content: "Dòng tóc em buồn",
  },
  {
    start: 18,
    stop: 24,
    content: "Bàn tay em cả ngàn ngón",
  },
];

export default class MusicLyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: 0,
      lyricSelected: [],
      lyricData: data,
      curLine: "",
    };
  }
  componentDidMount() {
    var time = this.state.curTime;
    setInterval(() => {
      this.setState({ curTime: time++ });
    }, 1000);
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
            <Text style={[playerStyle.nowPlaying, textStyle.bold]}>
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
              <MeIcon size={25} icon={mePlay} />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 50 }} />
          )}
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <View style={{ marginBottom: 9, alignItems: "center" }}>
              <Text style={[{ fontSize: 16, color: "#aaa" }, textStyle.bold]}>
                Chia tay hoàng hôn
              </Text>
              <Text style={[{ fontSize: 16, color: "#aaa" }, textStyle.medium]}>
                Ca sĩ: Thanh Lam
              </Text>
              <Text style={[{ fontSize: 16, color: "#aaa" }, textStyle.medium]}>
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
                  curTime={this.state.curTime}
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

const styles = StyleSheet.create({
  lineWrapper: {
    padding: 9,
  },
  line: {
    fontSize: 16,
    opacity: 0.8,
    color: "#888",
  },
});
