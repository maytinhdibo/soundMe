import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { homeStyle } from '../styles/homeStyle';
import Swiper from "react-native-web-swiper";
import SongItem from '../components/home/SongItem';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={homeStyle.slideShow}>
          <Swiper
            timeout={4.5}
            from={1}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              nextTitle: '>',
              nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
              PrevComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                    {/* {'Prev'} */}
                  </Text>
                </TouchableOpacity>
              ),
              NextComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                    {/* {'Next'} */}
                  </Text>
                </TouchableOpacity>
              ),
            }}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200, 1)" }}>
              <Text>Slide 1</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,200,20,1)" }}>
              <Text>Slide 2</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,1)" }}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View>
        <Text style={homeStyle.sectionTitle}>Đề xuất cho bạn</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: "#eee" }}>
            <SongItem imgUrl={""} name={"Nửa hồn thương đau"}/>
            <SongItem imgUrl={""} name={"Giấc mộng trong mơ"}/>
            <SongItem imgUrl={""} name={"Con đi đâu để thấy hoa bay"}/>
            <SongItem imgUrl={""} name={"Đi đu đưa đi"}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}
