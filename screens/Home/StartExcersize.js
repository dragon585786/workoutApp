import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import * as firebase from "firebase";
import configFirebase from "../../config/config";
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../css/style';
class StartExcersize extends Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {
            Workout:'salim',
            name:'khan'
                    }
        this.loadPosts = this.loadPosts.bind(this);
    }
    componentDidMount = async () =>{
  
        this.loadPosts();
       
    }
    loadPosts = () => {
     
    };
    render() {
      
        return (
            <View style={s.flexx}>
              <Text>{this.state.Workout}</Text>
              <Text>{this.state.name}</Text>
            </View>
        );
    }
}

export default StartExcersize;