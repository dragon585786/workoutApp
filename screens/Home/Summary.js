import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import * as firebase from "firebase";
import configFirebase from "../../config/config";
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../css/style';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
console.log(screenWidth,screenHeight,'size');

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workOuts: '',
            minutes: ''
        }
        this.loadPosts = this.loadPosts.bind(this);
    }
    componentDidMount() {

        this.loadPosts();
        this.loadPosts();
    }
    loadPosts = async () => {
        
        // const item = firebase.database().ref('summary/');
        // await item.set({
        //     workOuts: 69,
        //     minutes: 404
        // })

        // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then((res) => {
        //     firebase.database().ref('users/' + res.user.uid).set({
        //         firstName: firstName,
        //         lastName: lastName,
        //         email: email,
        //         code: code
        //     })
        // })
        try{
            // setting data firebase 
        if (firebase.auth().currentUser) {
            // let fire  = firebase.auth().currentUser;
           let userId = firebase.auth().currentUser.uid;
            console.log(userId)
            if (userId) {
             await firebase.database().ref('users/' + userId + '/' + 'summary/').set({
                    workOuts: 69,
                    minutes: 404
                })
            }
        }
        // calling data from firebase 
        if (firebase.auth().currentUser) {
          let  userId = firebase.auth().currentUser.uid;
            if (userId) {
                const itemss = firebase.database().ref('users/' + userId + '/' + 'summary/');
                await itemss.on('value', snapshot => {
                    let data = Object.values(snapshot.val());
                    console.log(data, 'snapshot');
                 this.setState({
                        workOuts: data[1],
                        minutes: data[0]
                    })
                })
            }
        }
        }
        catch(error){
console.log(error.toString())
        }   



        // const items = firebase.database().ref('summary');
        // await items.on('value', snapshot => {
        //     let data = Object.values(snapshot.val());
        //     // console.log(data, 'snapshot');
        //     this.setState({
        //         workOuts: data[1],
        //         minutes: data[0]
        //     })
        // })
    };
    render() {

        return (
            <View style={s.flexx}>
                <View style={[s.row, s.summaryStyle]}>
                    <View style={s.column}>
                        <View style={[s.sumMargin]}><Text style={[s.text1, s.white, s.shadow]}>{this.state.workOuts}</Text>
                            <Text style={[s.text2, s.white, s.shadow]}>{this.state.workOuts === null || this.state.workOuts === '' ? '' : 'Workouts'}</Text>
                        </View>
                    </View>
                    {/* <View style={s.column}>
                    <View style={[s.sumMargin]}>
                    <Text style={[s.text1,s.white,s.shadow]}>246</Text>
                    <Image source={require('../../assets/images/icon.png')} style={{height:100,width:100}} />
              <Icon name='add' />                    
                    <Text style={[s.text2,s.white,s.shadow]}>Add Plan</Text>
                    </View>
                    </View> */}
                    <View style={s.column}>
                        <View style={s.sumMargin}><Text style={[s.text1, s.white, s.shadow]}>{this.state.minutes}</Text>
                            <Text style={[s.text2, s.white, s.shadow]}>{this.state.minutes === null || this.state.minutes === '' ? '' : 'Minutes'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Summary;