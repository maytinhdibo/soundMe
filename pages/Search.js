import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { homeStyle } from '../styles/homeStyle';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { textStyle } from "../styles/textStyle";
import { CollapsibleHeaderScrollView } from 'react-native-collapsible-header-views';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }
    render() {
        return (

         <CollapsibleHeaderScrollView
    CollapsibleHeaderComponent={<View style={{ backgroundColor: 'white' }} />}
    headerHeight={100}
    statusBarHeight={Platform.OS === 'ios' ? 20 : 0}
  >
    <View style={{ height: 2000, backgroundColor: 'wheat' }} />
  </CollapsibleHeaderScrollView>
            // <View style={{ flex: 1, backgroundColor:'#345'}}>
            //     <View style={{
            //         flexDirection: 'column',
            //         height: getStatusBarHeight(),
            //         // backgroundColor: "#433"
            //     }}></View>

            //     <TextInput
            //         placeholder="Tìm kiếm bài hát mà bạn ưa thích..."
            //         style={{ 
            //             height: 40, 
            //             borderWidth: 0, 
            //             padding: 6,
            //             backgroundColor: "rgba(255,255,255,0.3)",
            //             margin: 26,
            //             marginTop: 10,
            //             borderRadius: 6
            //         }}
            //         onChangeText={text => this.setState({ searchValue: text })}
            //         value={this.searchValue}
            //     />
            //     <Text  style={textStyle.regular}>Search nè!</Text>

            // </View>
        );
    }
}
