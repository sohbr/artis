import { Tabs } from "./logged_in_components/router";
import React from "react";
import { connect } from "react-redux";
import RegisterForm from "./session_form/register_form";
import LoginForm from "./session_form/login_form";
import PostForm from "./post/post_form";
import Home from "./home";
import UserShow from "./user_profile/user_show";
import ReviewForm from "./reviews/review_form";
import ReviewIndexItem from "./reviews/review_index_item";
import ReviewIndex from "./reviews/reviews_index";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  Image,
  Dimensions,
  AsyncStorage
} from "react-native";

import { StackNavigator } from "react-navigation";

const ArtisApp = StackNavigator(
  {
    Home: { screen: Home },
    Register: { screen: RegisterForm },
    Login: { screen: LoginForm }
  },
  { headerMode: "screen" }
);

class Artis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkSignIn: false
    };
  }

  render() {
    // if (this.props.currentUser < 0) {
    //   return <View style={styles.container} />;
    // }
    return <Tabs/>;
    // return this.props.currentUser === null ? <ArtisApp /> : <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    flex: 1,
    backgroundColor: "black",
    width: Dimensions.get("window").width
  }
});

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(Artis);
