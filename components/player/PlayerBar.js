import React, { Component } from 'react';
import { Text, View, Image, Animated, Easing } from 'react-native';
import { homeStyle } from '../../styles/homeStyle';

import mePlay from '../../icons/icon-pack/mePlay';
import MeIcon from '../../icons/MeIcon';

export default class SongItem extends Component {
    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
    }

    componentDidMount() {
        this.StartImageRotateFunction();
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);

        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 15000,
            easing: Easing.linear,
        }).start(() => this.StartImageRotateFunction());
    }
    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        return (
            <View style={{
                position: "absolute",
                bottom: 55,
                left: 5,
                right: 5,
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 2,
                padding: 5,
                flexDirection: "row"
            }}>
                <View>
                    <Animated.Image
                        source={require("../../assets/thuphuong.jpg")}
                        style={{
                            height: 45,
                            width: 45,
                            borderRadius: 22.5,
                            borderWidth: 1,
                            borderColor: "#ddd",
                            resizeMode: "cover",
                            transform: [{ rotate: RotateData }],
                        }} />
                </View>
                <View
                    style={{
                         flex: 2,
                         justifyContent: 'center',
                         paddingLeft: 5
                    }}>
                    <Text style={{fontWeight:'700'}}>Tên bài hát</Text>
                    <Text>Ca sĩ</Text>
                </View>
                <View
                    style={{
                         justifyContent: 'center',
                         marginRight: 5,
                    }}>
                <MeIcon icon={mePlay} size={32} color="#555" />
                </View>
            </View>
        );
    }
}
