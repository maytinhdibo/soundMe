import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Slider,
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
  render() {
    const props = this.props;
    return (
      <TouchableOpacity style={styles.lineWrapper}>
        <Text
          style={[
            textStyle.medium,
            styles.line,
            props.curTime >= props.start && props.curTime < props.stop
              ? { color: "#000" }
              : null,
          ]}
        >
          {props.content}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class MusicLyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: 0,
    };
  }
  componentDidMount() {
    var time = this.state.curTime;
    setInterval(() => {
      this.setState({ curTime: time++ });
    }, 1000);
  }
  render() {
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
    return (
      <View style={{ flex: 1 }}>
        <View style={[playerStyle.header]}>
          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={[playerStyle.nowPlaying, textStyle.bold]}>
              Lời bài hát
            </Text>
            <TouchableOpacity><Text>Copy</Text></TouchableOpacity>
          </View>
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

            {data.map((line, key) => {
              return (
                <Line
                  key={key}
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
    padding: 4,
  },
  line: {
    fontSize: 16,
    opacity: 0.8,
    color: "#888",
  },
});
