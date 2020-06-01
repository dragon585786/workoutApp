import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDetAT4qkcPbQfCr71e8lM7ACYzNVpQtFs",
    authDomain: "body-war.firebaseapp.com",
    databaseURL: "https://body-war.firebaseio.com",
    projectId: "body-war",
    storageBucket: "body-war.appspot.com",
    messagingSenderId: "26249537213",
    appId: "1:26249537213:web:80c676aa5060f23560b9d4",
    measurementId: "G-WL31N5BDKE"
  };
  export default configFirebase = firebase.initializeApp(firebaseConfig);