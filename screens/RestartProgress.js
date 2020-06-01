import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Headerr from '../header/header';
import { LinearGradient } from 'expo-linear-gradient';
import s from '../css/style';


export default class RestartProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.link = this.link.bind(this);
  }

  link() {
    this.props.navigation.navigate('Setting');
  }

  render() {



    return (
      <LinearGradient
       colors={['#6e45e2', '#88d3ce']}
        style={s.containerBody}
      >
        <View style={s.container}>
          <Headerr name='Restart' pro={this.props.navigation} />
          <ScrollView>
            <Button onPress={this.link} title='link' />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }

}

