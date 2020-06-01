import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../css/style';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from "firebase";
import configFirebase from "../../config/config";


class Send extends Component {
  static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { 
          
         }
 
    }
    componentDidMount() {

        this.loadPosts();
    }
    loadPosts = async () => {
        //         const email = 'sk1234567890@gmail.com', lname = 'alim', fname = 'khan';
        //   console.log('data1 ',email,lname,fname);
        //   await firebase.database().ref('Users/001').set({
        //    email,
        //    fname,
        //    lname
        // }).then((data)=>{
        //    //success callback
        //    console.log('data2 ' , data)
        // }).catch((error)=>{
        //    //error callback
        //    console.log('error3 ' , error)
        // })

        // const items = firebase.database().ref('biginner');
        // await items.on('value', snapshot => {
        //     let data = Object.values(snapshot.val());
        //     console.log(data, 'snapshot');
        //     this.setState({
        //     data: data
        //     })
        // })
    };
   
    render() { 
        const name = this.props.navigation.getParam('name');

        return (  
            <LinearGradient
            colors={['#6e45e2', '#88d3ce']}
            style={[s.containerBody]}
          >
          <View><Text style={[s.text1]}>{name}</Text>
          </View>
             
              </LinearGradient>
          );
    }
}
 
export default Send;