import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../css/style';
import { Asset } from 'expo-asset';
import { beginner } from './HomeDatabase';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from "firebase";
import configFirebase from "../../config/config";


class Beginner extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas:[]
         }
        this.begImage = this.begImage.bind(this);
        this.loadPosts = this.loadPosts.bind(this)
    }
    componentDidMount() {
        this.loadPosts();
    }
    loadPosts = async () => {
       

        try{
  
             await firebase.database().ref('beginnerText/').set(
                [
                    {
                        'workout':'CHEST WORKOUT',
                        'excersize':16,
                        'name':'BEGGINER',
                        'img':"require('../../assets/images/cheast/cheastBeg.png')"
                    },
                    {
                        'workout':'ABS WORKOUT',
                        'excersize':16,
                        'name':'BEGGINER',
                        'img':"require('../../assets/images/abs/absBeg.png')"
                    },{
                        'workout':'LEG WORKOUT',
                        'excersize':16,
                        'name':'BEGGINER',
                        'img':"require('../../assets/images/leg/legBeg.png')"
                    },{
                        'workout':'ARM WORKOUT',
                        'excersize':16,
                        'name':'BEGGINER',
                        'img':"require('../../assets/images/arm/armBeg.png')"
                    },{
                        'workout':'SHOULDER WORKOUT',
                        'excersize':16,
                        'name':'BEGGINER',
                        'img':"require('../../assets/images/shoulder/shoulderBeg.png')"
                    },
                ]
                )

            // await firebase
            // .storage()
            // .ref("image/biginner/")
            // .child(uid)
            // .getDownloadURL()
            // .then(url => {
            //   return console.log(url);
            // })
            // .catch(err => console.log(err))
            
        
        
                // const itemss = firebase.database().ref('beginnerText/');
                // await itemss.on('value', snapshot => {
                //     let data = Object.values(snapshot.val());
                //     // console.log(data, 'snapshottt');
                //  this.setState({
                //        datas:data
                //     })
                // })
        }
        catch(error){
console.log(error.toString())
        }   
    };
    begImage = () =>{
        if(this.state.datas){
                
        return(
           
        beginner.map((option,key) =>{
            // let images = option.img.replace(/["]+/g, '');
            // console.log('images',images)
            return(
                <TouchableOpacity style={[s.imageMargin]} onPress={()=> this.props.props.navigate('WorkoutTime',{name:option.name,workout:option.workout})}>
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
       
    }
    render() { 
        if(this.state.datas){
            this.state.datas.map(option => {
                // console.log(option.img.replace(/["]+/g, ''))
//                 var someStr = "require('../../assets/images/shoulder/shoulderBeg.png')";
// console.log(someStr.replace(/["]+/g, ''));
            })
        }
      
        return (  
        //     <LinearGradient
        //     colors={['#575151', '#575151']}
        //     style={{borderRadius:20,marginBottom:20}}
        //   >
              <View style={s.flexx}>
              <View style={[s.card]}>
              <View style={[s.begginerText]}>
              <Text style={[s.white,s.text3,s.shadow]}>BEGINNER</Text>
              </View>
              {/* <View style={[s.imageMargin]}>
                  <Image source={require('../../assets/images/bodyDrawer.png')} style={[s.imgBeg]}/>
              </View> */}
              {this.begImage()}
              </View>
              </View>
            //   </LinearGradient>
          );
    }
}
 
export default Beginner;