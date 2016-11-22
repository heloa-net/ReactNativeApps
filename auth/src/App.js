import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDzkSpCBkVKdjGC2siYvm3r2fJamOQ8vaY',
    authDomain: 'auth-fe6ed.firebaseapp.com',
    databaseURL: 'https://auth-fe6ed.firebaseio.com',
    storageBucket: 'auth-fe6ed.appspot.com',
    messagingSenderId: '349651074027'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    );
  }
}

export default App;