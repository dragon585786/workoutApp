import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import Headerr from '../header/header';
import { LinearGradient } from 'expo-linear-gradient';
import s from '../../css/style';

class AddNewExcersize extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <LinearGradient
            colors={['#88d3ce', '#88d3ce']}
            style={s.subContainer}
          >
              <ScrollView style={s.flexx}>
                <Button title='AddNewExcersize' />
              </ScrollView>
          </LinearGradient> );
    }
}
 
export default AddNewExcersize;