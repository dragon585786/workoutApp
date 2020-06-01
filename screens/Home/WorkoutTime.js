import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import s from '../../css/style';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from "firebase";
import configFirebase from "../../config/config";
import {
    begginerChestWorkout, biginnerAbsWorkout, biginnerLegWorkout, biginnerArmWorkout, biginnerShoulderWorkout,
    intermediateChestWorkout, intermediateAbsWorkout, intermediateLegWorkout, intermediateArmWorkout, intermediateShoulderWorkout,
    advanceChestWorkout, advanceAbsWorkout, advanceLegWorkout, advanceArmWorkout, advanceShoulderWorkout
} from './HomeDatabase';

class WorkoutTime extends Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {
            Workout: 'salim khan babe',
            name: 'don don don'
        }
        this.listWorkout = this.listWorkout.bind(this);
        this.nextStart = this.nextStart.bind(this);
       

    }
    componentDidMount() {
        this.listWorkout();
    }
    nextStart = () => {
        console.log(this.state.Workout, this.state.name, 'nextstart')
        this.props.navigation.navigate('StartExcersize', { Excersize: this.state.Workout, name: this.state.name })

    }
   

   
    listWorkout = () => {
        const name = this.props.navigation.getParam('name');
        const workout = this.props.navigation.getParam('workout');

        if (name === 'BEGINNER') {

            switch (workout) {

                case 'CHEST WORKOUT':
                        
                    return (<View>
                        {
                            begginerChestWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'ABS WORKOUT':
                    return (<View>
                        {
                            biginnerAbsWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'LEG WORKOUT':
                    return (<View>
                        {
                            biginnerLegWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'ARM WORKOUT':
                    return (<View>
                        {
                            biginnerArmWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'SHOULDER WORKOUT':
                    return (<View>
                        {
                            biginnerShoulderWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;
                default:
                    Alert.alert("NUMBER NOT FOUND IN SWOTCH");

            }

        }

        if (name === 'INTERMEDIATE') {

            switch (workout) {

                case 'CHEST WORKOUT':
                    return (<View>
                        {
                            intermediateChestWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'ABS WORKOUT':
                    return (<View>
                        {
                            intermediateAbsWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'LEG WORKOUT':
                    return (<View>
                        {
                            intermediateLegWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'ARM WORKOUT':
                    return (<View>
                        {
                            intermediateArmWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'SHOULDER WORKOUT':
                    return (<View>
                        {
                            intermediateShoulderWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;
                default:
                    Alert.alert("NUMBER NOT FOUND IN SWOTCH");

            }

        }


        if (name === 'ADVANCE') {

            switch (workout) {

                case 'CHEST WORKOUT':
                    return (<View>
                        {
                            advanceChestWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'ABS WORKOUT':
                    return (<View>
                        {
                            advanceAbsWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'LEG WORKOUT':
                    return (<View>
                        {
                            advanceLegWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'ARM WORKOUT':
                    return (<View>
                        {
                            advanceArmWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;

                case 'SHOULDER WORKOUT':
                    return (<View>
                        {
                            advanceShoulderWorkout.map(option => {
                                return (<TouchableOpacity style={[s.listWorkout]}>
                                    <Icon name='menu' style={{ flex: 1, marginLeft: 20 }} />
                                    <View style={{ flex: 1, marginLeft: -80 }}><Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBeglistWorkout]} /></View>
                                    <View style={{ flex: 1, marginLeft: -20 }}>
                                        <Text style={[s.text2]}>{option.name}</Text>
                                        <Text>{option.duration}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })
                        }
                    </View>);
                    break;
                default:
                    Alert.alert("NUMBER NOT FOUND IN SWOTCH");

            }

        }


    }
    render() {
        const name = this.props.navigation.getParam('name');
        const workout = this.props.navigation.getParam('workout');

        return (
            <LinearGradient
                colors={['#6e45e2', '#88d3ce']}
                style={{ flex: 1 }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Image source={require('../../assets/images/cheast/cheastBeg.png')} style={[s.imgBegWorkout]} />
                    <View style={[s.begText]}><Text style={[s.white, s.text3, s.shadow]}>{name}</Text>
                        <Text style={[s.white, s.text3, s.shadow]}>{workout}</Text></View>
                    <View style={[s.sumDetail]}>
                        <Text style={[s.text3, s.shadow, s.white]}>19 <Text style={[s.text3, s.shadow, s.white]}>mins  </Text></Text>
                        <Text style={[s.text3, s.shadow, s.white]}>16 <Text style={[s.text3, s.shadow, s.white]}>workouts  </Text></Text>

                    </View>
                    <View style={[s.viewlist]}>
                        {this.listWorkout()}
                    </View>
                </ScrollView>
                {/* <LinearGradient
                colors={['#ffffff', '#ffffff']}
            > */}
                <View  style={[s.start]}>
                    <Button style={[s.startButton]} onPress={() =>{this.nextStart()}} title='start' />
                </View>

                {/* </LinearGradient> */}

            </LinearGradient>
        );
    }
}

export default WorkoutTime;