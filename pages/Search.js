import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { homeStyle } from '../styles/homeStyle';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#345' }}>
                <View style={{
                    flexDirection: 'column',
                    height: getStatusBarHeight(),
                    // backgroundColor: "#433"
                }}></View>

                <TextInput
                    placeholder="Tìm kiếm bài hát mà bạn ưa thích..."
                    style={{ 
                        height: 40, 
                        borderWidth: 0, 
                        padding: 6,
                        backgroundColor: "rgba(255,255,255,0.3)",
                        margin: 26,
                        marginTop: 10,
                        borderRadius: 6
                    }}
                    onChangeText={text => this.setState({ searchValue: text })}
                    value={this.searchValue}
                />
                <Text>Search nè!</Text>

            </View>
        );
    }
}
