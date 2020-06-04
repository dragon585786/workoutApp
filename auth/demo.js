import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Modal, Alert, TextInput, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import s from '../css/style';
import { Asset } from 'expo-asset';
// import { begginer } from './HomeDatabase';
// import HomeScreen from '../screens/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Header, Left, Body, Right, Icon, Title, Form, Item, Input, Label, Content, Button } from 'native-base';
import * as firebase from "firebase";
import configFirebase from "../config/config";



class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalVisible: false,
      modalsignin: false,
      email: '',
      password: '',
      conpass: '',
      done: false,
    }
    this.link = this.link.bind(this);
    this.link1 = this.link1.bind(this);
    this.modall = this.modall.bind(this);
    this.signup = this.signup.bind(this);
    this.signin = this.signin.bind(this);
    this.modalopenSignup = this.modalopenSignup.bind(this);
    this.modalopenSignin = this.modalopenSignin.bind(this);
  }
  componentDidMount() {
    // this.modall();

  }
  modalopenSignup = () => {
    this.setState({
      // done: true,
      modalsignin: false,
      modalVisible: true,
      email: '',
      password: '',

    })
  }
  modalopenSignin = () => {
    this.setState({
      // done: true,
      modalsignin: true,
      modalVisible: false,
      email: '',
      password: '',

    })
  }
  signup = async (email, password, conpass) => {
    try {

      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (email === "") {
        ToastAndroid.showWithGravityAndOffset(
          "Email Required",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (reg.test(email) === false) {
        ToastAndroid.showWithGravityAndOffset(
          "Invalid Email",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (password === "") {
        ToastAndroid.showWithGravityAndOffset(
          "Password Required",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (password < 6) {
        ToastAndroid.showWithGravityAndOffset(
          "Password must be 6 characters",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
      else if (password != conpass) {
        ToastAndroid.showWithGravityAndOffset(
          "Password is not same",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
      else {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        await this.setState({
          modalVisible: !this.state.modalVisible,
          modal: true
        })
      }
    }
    catch (error) {
      console.log(error.toString());
    }


  }

  signin = async (email, password) => {
    try {

      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (email === "") {
        ToastAndroid.showWithGravityAndOffset(
          "Email Required",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (reg.test(email) === false) {
        ToastAndroid.showWithGravityAndOffset(
          "Invalid Email",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (password === "") {
        ToastAndroid.showWithGravityAndOffset(
          "Password Required",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (password < 6) {
        ToastAndroid.showWithGravityAndOffset(
          "Password must be 6 characters",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
      else {
        firebase
          .auth()
          .fetchSignInMethodsForEmail(email)
          .catch(err => {
            Alert.alert(err.code);
          })
          .then(response => {
            if (response[0] == "password") {
              return true;
            } else {
              // Alert.alert("Please Sign Up !");
              // this.props.navigation.replace("Reg");
              this.setState({
                email: '',
                password: '',
                modalVisible: true,
                modalsignin: false,
                modal: false,

              })
              return false;
            }
          })

          .then(response => {
            if (response) {
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(err => {
                  Alert.alert(err.message);
                  // this.setState({
                  //   start: false
                  // });
                })
                .then(respons => {
                  if (respons == null) {
                    //Firebase returns null if password is incorrect.
                    ToastAndroid.showWithGravityAndOffset(
                      "Please Try Again",
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM,
                      25,
                      50
                    );
                  } else {
                    // this.props.navigation.navigate('Training Plans');
                    this.setState({
                      modalVisible: false,
                      modalsignin: false,
                      modal: false,
                    })
                    this.props.navigation.navigate('Training Plans')

                  }
                });
            }
          });
      }
    }
    catch (error) {
      console.log(error.toString());

    }


  }

  link() {
    this.setState({
      modal: false
    });

    this.props.navigation.navigate('Training Plans', { name: 'FAT' })

  }
  link1() {
    this.setState({
      modal: false
    });
    this.props.navigation.navigate('Training Plans', { name: 'THIN' })

  }
  modall = () => {

    if (this.state.modalsignin === true) {
      return;
    }
    else {
      // if (this.state.done === false) {
      this.setState({
        modalsignin: true
      })
      // }

    }

  }
  render() {
    const { email, password, conpass } = this.state;

    return (
      <LinearGradient
        colors={['#000000', '#575151']}
        style={[s.containerBody]}
      >
        {/* <Container> */}
        <Header
          // style={{ backgroundColor: '#6e45e2' }}
          style={{ backgroundColor: '#000000' }}
          androidStatusBarColor="#000000"
        >

          <Body>
            <Title>BODY WAR</Title>
          </Body>

        </Header>
        {/* </Container> */}
        <View style={s.container}>
          {/* modall start here  */}
          {/* temperary button for login */}
          <View style={[s.flexx, s.loginButton]}>
            <Button bordered success onPress={() => { this.modall() }} style={[s.loginMar]}>
              <Text style={[s.white]}>SWITCH ACCOUNT</Text>
            </Button>
            <Button bordered success onPress={() => { this.setState({ modalVisible: true }) }} style={[s.loginMar]}>
              <Text style={[s.white]}>ADD AN ACCOUNT</Text>
            </Button>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({ modalVisible: false })

            }}
          // style = {{ height: 300, width: 300 }}
          >
            <View style={[s.modal]}>
              <View style={{
                 width: 338,
                height: 650,
              }}>
              {/* sign up here  */}
              
                <LinearGradient
                   colors={['#000000', '#034373']}
                  style={[s.containerBody, s.boxRadius, s.boxColor]}
                >
                  <View style={[s.modalINNER]}>
                    {/* close icon  */}
                    <TouchableOpacity style={s.closeIcons}>
                      <Icon ios='ios-close' android="md-close" style={{ fontSize: 50, color: 'white' }} onPress={() => { this.setState({ 'modalVisible': false }) }} />
                    </TouchableOpacity>
                    <View style={[s.flexx, s.contactIcon]}>
                      <Icon ios='ios-contact' android="md-contact" style={{ fontSize: 150, color: 'white' }} />
                    </View>
                    <View style={{ flex: 1, justifyContent:'center',alignItems:'center',marginBottom:80 }}>
                    <TextInput
                      style={[s.TextInputt]}
                      onChangeText={email => this.setState({ email })}
                      placeholder='EMAIL'
                      value={this.state.email}
                    />

                    <TextInput
                      style={[s.TextInputtRow]}
                      onChangeText={password => this.setState({ password })}
                      placeholder='PASSWORD'
                      // keyboardType={'numeric'}
                      value={this.state.password}
                    />
                    <TextInput
                      style={[s.TextInputtRow]}
                      onChangeText={conpass => this.setState({ conpass })}
                      placeholder='CONFIRM PASWORD'
                      // keyboardType={'numeric'}
                      value={this.state.conpass}
                    />
                      <Text style={[s.white,s.text4,s.shadow]}>-OR-</Text>

                    </View>
                    <View style={{ flexDirection: 'row', flex:1, justifyContent: 'space-between', marginLeft:30}}>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-google" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-facebook" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-twitter" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-instagram" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                    style={{ flex:1 }}
                    >
                  <Button style={{  height: 50, width: 70, justifyContent: 'center' }} danger onPress={() => { this.signup(email, password, conpass) }}>
                    <Text style={[s.text4, s.white, s.shadow]}>SIGN UP</Text>
                  </Button>
                  </View>
                  <View style={{ flexDirection: 'row', margin: 20, marginBottom: 0, flex: 1 }}>
                    <Text style={[s.text4, s.white, s.shadow]} onPress={() => { this.modalopenSignin() }}> ALREADY HAVE ACCOUNT?<Text> SIGN IN</Text></Text>
                  </View>

                  </View>

                </LinearGradient>
              </View>
            </View>
          </Modal>

        
          {/* modal of sign in start here */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalsignin}
            onRequestClose={() => {
              this.setState({ modalsignin: false })
            }}
          // style = {{ height: 300, width: 300 }}
          >
            <View style={[s.modal]}>
              <View style={{
                width: 338,
                height: 650,
              }}>
                <LinearGradient
                  colors={['#000000', '#034373']}
                  style={[s.containerBody, s.boxRadius, s.boxColor]}
                >
                  <View style={[s.modalINNER]}>
                    {/* close icon  */}
                    <TouchableOpacity style={s.closeIcons}>
                      <Icon ios='ios-close' android="md-close" style={{ fontSize: 50, color: 'white' }} onPress={() => { this.setState({ modalsignin: false }) }} />
                    </TouchableOpacity>
                    <View style={[s.flexx, s.contactIcon]}>
                      <Icon ios='ios-contact' android="md-contact" style={{ fontSize: 150, color: 'white' }} />
                    </View>
                    <View style={{ flex: 1, justifyContent:'center',alignItems:'center',marginBottom:40 }}>
                      <TextInput
                        style={[s.TextInputt]}
                        onChangeText={email => this.setState({ email })}
                        placeholder='EMAIL'
                        value={this.state.email}
                      />

                      <TextInput
                        style={[s.TextInputtRow]}
                        onChangeText={password => this.setState({ password })}
                        placeholder='PASSWORD'
                        // keyboardType={'numeric'}
                        value={this.state.password}
                      />
                      <Text style={[s.white,s.text4,s.shadow]}>-OR-</Text>
                    </View>


                    <View style={{ flexDirection: 'row', flex:1, justifyContent: 'space-between', marginLeft:30}}>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-google" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-facebook" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-twitter" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={s.closeIcon}
                      >
                        <Icon ios='logo-google' android="logo-instagram" style={{ fontSize: 50, color: 'red' }}
                        //  onPress={() => { this.setState({ modalsignin: false }) }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                    style={{ flex:1 }}
                    >
                      <Button style={{ height: 50, width: 70, justifyContent: 'center' }} danger onPress={() => { this.signin(email, password) }}>
                        <Text style={[s.text4, s.white, s.shadow]}>SIGN IN</Text>
                      </Button>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 20, marginBottom: 0, flex: 1 }}>
                      <Text style={[s.text4, s.white, s.shadow]} onPress={() => { this.modalopenSignup() }}> DONT HAVE ACCOUNT?<Text> SIGN UP</Text></Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </Modal>

            {/* modal of fat & thin */}
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modal}
            onRequestClose={() => {
              this.setState({ modal: false })

            }}
          // style = {{ height: 300, width: 300 }}
          >
            <View style={[s.modal]}>
              <View style={{
                width: 338,
                height: 350,
              }}>
                <LinearGradient
                  colors={['#88d3ce', '#6e45e2']}
                  style={[s.containerBody, s.boxRadius]}
                >
                  <View style={[s.modalINNER]}>
                    <View>
                      <Text style={[s.text2, s.shadow, s.white]}>CHOOSE YOUR BODY TYPE </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={[s.imageMargin1]} onPress={() => this.link()}>
                        <Image source={require('../assets/images/bodyDrawer.png')} style={[s.imgBeg1]} />
                        <View
                          style={[s.begText]}><Text style={[s.white, s.text4, s.shadow]}>ARE YOU FAT</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={[s.imageMargin1]} onPress={() => this.link1()}>
                        <Image source={require('../assets/images/bodyDrawer.png')} style={[s.imgBeg1]} />
                        <View
                          style={[s.begText]}><Text style={[s.white, s.text4, s.shadow]}>ARE YOU THIN</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* <View style={[s.row]}>
                  <Text> ALREADY HAVE ACCOUNT?<Text>SIGN IN</Text></Text>
                  </View> */}

                </LinearGradient>
              </View>
            </View>
          </Modal>
        </View>
      </LinearGradient>
    );
  }
}

export default Demo;