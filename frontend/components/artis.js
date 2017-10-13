import { Tabs } from "./logged_in_components/router";
import React from "react";
import { connect } from "react-redux";
import RegisterForm from "./session_form/register_form";
import LoginForm from "./session_form/login_form";
import PostForm from "./post/post_form";
import Home from "./home";
import TempExplore from "./temp";
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

  }



  componentWillUpdate() {
    console.log("hello");
  }

  render() {
    if (this.props.currentUser < 0) {
      return (
        <View style={styles.container}>
          <View />
        </View>
      );
    } else {
      return this.props.currentUser === null ? <ArtisApp /> : <Tabs />;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(Artis);
