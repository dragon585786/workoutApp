import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import React from 'react';
import { SafeAreaView, Dimensions, ScrollView, View, Image, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SetPlans from '../screens/SetPlans';
import Remainder from '../screens/Remainder';
import Report from '../screens/Report';
import RestartProgress from '../screens/RestartProgress';
import s from '../css/style';
import { Header, Left, Right, Icon } from 'native-base';
import routerStack from './router';
import Demo from '../auth/demo';



const customDrawerComponent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={s.imageBody}>
                <Image source={require('../assets/images/bodyDrawer.png')} style={s.drawerImage} />
                <Text style={s.drawerImageText}>BODY WAR</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

const Screens = {
    "Training Plans": {
        screen: HomeScreen,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="timer" />
            ),
        },
    },
    "Set Plans":{
        screen: SetPlans,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="grid" />
            ),

        }
    },
  
    "Report":{
        screen: Report,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="paper" />
            ),

        }
    },
    "Restart Progress":{
        screen: RestartProgress,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="refresh" />
            ),

        }
    },
    "Remainder":{
        screen: Remainder,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="alarm" />
            ),

        }
    },
    Setting: {
        screen: routerStack,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="settings" />
            ),

        }
    },
    Login: {
        screen: Demo,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="bicycle" />
            ),

        }
    },

};

const rootDrawer = createDrawerNavigator(Screens, {
    contentComponent: customDrawerComponent,
    contentOptions: {
        activeTintColor: 'purple'
    }
});
export default createAppContainer(rootDrawer);