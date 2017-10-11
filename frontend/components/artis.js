import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './session_form/register_form';
import LoginForm from './session_form/login_form';
import Home from './home';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const ArtisApp = StackNavigator({
  Home: { screen: Home },
  Register: { screen: RegisterForm },
  Login: { screen: LoginForm },
});


export default class Artis extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ArtisApp />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
