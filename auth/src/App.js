import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCIR9kZ3qnvg_Iq8S6Uww4Z28l3iDphZxA',
    authDomain: 'auth-65d06.firebaseapp.com',
    databaseURL: 'https://auth-65d06.firebaseio.com',
    storageBucket: 'auth-65d06.appspot.com',
    messagingSenderId: '1060771946811'
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