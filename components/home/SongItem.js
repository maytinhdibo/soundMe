import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { homeStyle } from '../../styles/homeStyle';

export default class SongItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={homeStyle.songItem}>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}
