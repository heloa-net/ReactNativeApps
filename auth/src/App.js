import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCIR9kZ3qnvg_Iq8S6Uww4Z28l3iDphZxA',
    authDomain: 'auth-65d06.firebaseapp.com',
    databaseURL: 'https://auth-65d06.firebaseio.com',
    storageBucket: 'auth-65d06.appspot.com',
    messagingSenderId: '1060771946811'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size='large' />
          </CardSection>
        );
    }    
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;