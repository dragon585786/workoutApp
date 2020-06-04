import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Headerr from '../header/header';
import { LinearGradient } from 'expo-linear-gradient';
import s from '../css/style';

export default class LinksScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {}
    this.link = this.link.bind(this);

  }
  link() {
    this.props.navigation.navigate('Training Plans');
  }
  render() {
    

    return (<LinearGradient
     colors={['#6e45e2', '#88d3ce']}
      style={s.containerBody}
    >
      <View style={s.container}>
        <Headerr name='Setting' pro={this.props.navigation} />
        <ScrollView>
          <Button onPress={this.link} title='For Fat & For Thin' />
          <Button onPress={this.link} title='Water Reminder' />
          <Button onPress={this.link} title='Home Workout & Gym Workout ' />
          <Button onPress={this.link} title='user login ' />
          <Button onPress={this.link} title='Diet plan' />
          <Button onPress={this.link} title='Tracking Calender' />
          <Button onPress={this.link} title='Rate us' />
          <Button onPress={this.link} title='New Motivation Update' />
          <Button onPress={this.link} title='Mdals for progress like COD' />
          <Button onPress={this.link} title='Feedback ( esay to thakela)' />
          <Button onPress={this.link} title='Wall post Like Instagram' />
          <Button onPress={this.link} title='Kacl burn' />
          <Button onPress={this.link} title='Step count' />
          <Button onPress={this.link} title='Set Plan' />
          <Button onPress={this.link} title='Reminder' />
          <Button onPress={this.link} title='Report' />
          <Button onPress={this.link} title='Restart Program' />
          <Button onPress={this.link} title='Profile' />
          <Button onPress={this.link} title='Setting' />
          <Button onPress={this.link} title='Share' />
          <Button onPress={this.link} title='challenge your friends' />

        </ScrollView>
      </View>
    </LinearGradient>
    );
  };
}
