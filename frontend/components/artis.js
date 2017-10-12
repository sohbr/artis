
import { Tabs } from "./logged_in_components/router";
import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './session_form/register_form';
import LoginForm from './session_form/login_form';
import PostForm from './post/post_form';
import Home from './home';
<<<<<<< HEAD
import TempExplore from './temp';
=======
import UserShow from './user_profile/user_show';
>>>>>>> fef46a861ccdc963d7a677815bcf4b3586e7270e

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import { StackNavigator } from "react-navigation";

<<<<<<< HEAD
const ArtisApp = StackNavigator(
  {
    Home: { screen: Home },
    Register: { screen: RegisterForm },
    Login: { screen: LoginForm },
    PostForm: { screen: PostForm },
    TempExplore: { screen: TempExplore},
  },
  { headerMode: "screen" }
);


export default class Artis extends React.Component {

=======
const ArtisApp = StackNavigator({
  Home: { screen: Home },
  Register: { screen: RegisterForm },
  Login: { screen: LoginForm }
});

class Artis extends React.Component {
>>>>>>> fef46a861ccdc963d7a677815bcf4b3586e7270e
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.currentUser === null ? <ArtisApp /> : <Tabs />}

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(Artis);
