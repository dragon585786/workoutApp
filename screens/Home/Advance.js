import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../css/style';
import { Asset } from 'expo-asset';
import { advance } from './HomeDatabase';
import { LinearGradient } from 'expo-linear-gradient';


class Advance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.begImage = this.begImage.bind(this);
    }
    begImage = () =>{
        return(
        advance.map((option,key) =>{
            return(
                <TouchableOpacity style={[s.imageMargin]}  onPress={()=> this.props.props.navigate('WorkoutTime',{name:option.name,workout:option.workout})}>
                <Image source={option.img} style={[s.imgBeg]}/>
                <View key={key}
                 style={[s.begText]}><Text style={[s.white,s.text4,s.shadow]}>{option.workout}</Text>
                <Text style={[s.white,s.text4,s.shadow]}>WORKOUT : {option.excersize}</Text>
                <Text style={[s.white,s.text4,s.shadow]}>{option.name}</Text>
                </View>
            </TouchableOpacity>
            );
        })
        )
       
    }
    render() { 
        return (  
            <LinearGradient
            colors={['#000000', '#575151']}
            style={{borderRadius:20,marginBottom:20}}
          >
              <View style={s.flexx}>
              <View style={[s.card]}>
              <View style={[s.begginerText]}>
              <Text style={[s.white,s.text3,s.shadow]}>ADVANCE</Text>
              </View>
              {/* <View style={[s.imageMargin]}>
                  <Image source={require('../../assets/images/bodyDrawer.png')} style={[s.imgBeg]}/>
              </View> */}
              {this.begImage()}
              </View>
              </View>
              </LinearGradient>
          );
    }
}
 
export default Advance;