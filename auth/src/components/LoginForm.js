import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{ height: 20, width: 100}}/>
        </CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;