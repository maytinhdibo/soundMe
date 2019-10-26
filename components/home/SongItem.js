import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { homeStyle } from '../../styles/homeStyle';
import * as Animatable from 'react-native-animatable';

export default class SongItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Animatable.View animation="bounceInRight" easing="ease-out" style={homeStyle.songItem}>
                <Image
                source={require("../../assets/demcuu.jpg")}
                style={{
                    fontFamily:"Quicksand-Regular",
                    height: 120,
                    width: 120,
                    resizeMode:"cover",
                    width: "100%",
                    }} />
                    <View>
                <Text
                style={{
                    fontFamily:"Quicksand-Regular",
                    padding: 6,
                    fontSize: 14,
                    textTransform: 'uppercase'
                }}
                >{this.props.name}</Text>
                </View>
            </Animatable.View>
        );
    }
}
