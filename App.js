import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import Navigator from './routes/rootDrawer';
import * as firebase from "firebase";
import configFirebase from "./config/config";
import Demo from './auth/demo';
import { Root } from "native-base";
import { AppLoading } from "expo";


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // loading: true,
      // authenticated: false,
      fontLoaded: true,
    };
    YellowBox.ignoreWarnings(['Setting a timer']);
  }

 async componentWillMount() {

 
        try {
            await Font.loadAsync({
              Roboto: require('native-base/Fonts/Roboto.ttf'),
              Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            });
            this.setState({ fontLoaded: false });
        } catch (e) {
          console.log(e.toString());
        }
      }
  
  

  render() {
    if (this.state.fontLoaded){
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return(
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
       <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }