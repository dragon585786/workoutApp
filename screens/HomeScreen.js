import * as React from 'react';
import { Image, Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, Modal, Alert, TextInput, ToastAndroid } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Headerr from '../header/header';
import { LinearGradient } from 'expo-linear-gradient';
import s from '../css/style';
import AddNewExcersize from '../screens/Home/AddNewExcersize';
import Beginner from '../screens/Home/Beginner';
import Intermediate from '../screens/Home/Intermediate';
import Advance from '../screens/Home/Advance';
import CreatePlan from '../screens/Home/CreatePlan';
import Summary from '../screens/Home/Summary';
import * as firebase from "firebase";
import configFirebase from "../config/config";
import { Root } from "native-base";
export default class HomeScreen extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: '',
    }
    this.modall = this.modall.bind(this);
  }
  componentDidMount() {

  
// console.log(screenWidth,screenHeight,'size');

    this.modall();
//     var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;
// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                // this value to authenticate with your backend server, if
//                // you have one. Use User.getToken() instead.
// }
// const user = firebase.auth().currentUser;
// user.providerData.forEach((userInfo) => {
//   console.log('User info for provider: ', userInfo);
// });
// const user = firebase.auth().currentUser;
// console.log('User metadata: ', user);
  }
  modall = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loading: false, authenticated: true });
        console.log('user true hai',user.uid)
      this.props.navigation.navigate('Training Plans');
      } else {
        this.setState({ loading: false, authenticated: false });
        console.log('user false hai')
        this.props.navigation.navigate('Login');
      }
    });
    if (this.state.authenticated === false) {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
// console.log('user data',name, email, photoUrl, uid, emailVerified)
// console.log('salim khan')
let sw = Dimensions.get('window').width;
let sh = Dimensions.get('window').height;
    return (
      <LinearGradient
        colors={['#000000', '#575151']}
        style={s.containerBody}
      >
        <View style={s.container}>
          <Headerr name='BODY WAR' pro={this.props.navigation} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={s.homeScroll}>
            <View style={{ justifyContent: 'center', marginTop: 15, marginBottom: 0, flex:1, alignItems:'center'  }}>
              <Text style={[s.white, s.shadow, s.text2]}>here come summary of report</Text>
              <Text style={[s.white, s.shadow, s.text3, s.judt]}>{this.props.navigation.getParam('name') === null || this.props.navigation.getParam('name') === undefined || this.props.navigation.getParam('name') === '' ? 'of progress' : this.props.navigation.getParam('name')}</Text>
            </View>
            <Summary props={this.props.navigation} />
            <Beginner props={this.props.navigation} />
            <Intermediate props={this.props.navigation} />
            <Advance props={this.props.navigation} />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

