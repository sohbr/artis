import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import values from "lodash/values";
import Dimensions from "Dimensions";
import UserInfo from "./user_info";
import UserPhotosIndex from "./user_photos_index";
import { logout, RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { getAllReviews } from "../../actions/review_actions";

import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  StackNavigator,
  Button
} from "react-native";

class UserShow extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      header: null
    };
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllReviews(1);
  }

  handleLogout() {
    return () => {
      this.props.logout(this.props.currentUser);
    };
  }

  render() {
    const { currentUser, reviews } = this.props;
    const reviewsAvg = reviews.pop();
    const userImg =
      "http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg";
    const rating = reviewsAvg;
    const reviewsCount = reviews.length;
    return (
      <ScrollView style={styles.container}>
        <Button onPress={this.handleLogout()} title={"Logout"} />
        <UserInfo
          currentUser={currentUser}
          rating={rating}
          reviewsCount={reviewsCount}
          prevStateKey={this.props.screenProps.prevStateKey}
          navigation={this.props.navigation}
          style={styles.userInfo}
        />
        <View style={styles.hr} />
        <UserPhotosIndex />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "white"
  },
  userInfoContainer: {
    flex: 1
  },
  userInfo: {
    justifyContent: "center"
  },
  hr: {
    width: Dimensions.get("window").width * 1,
    justifyContent: "center",
    borderBottomColor: "#C6D166",
    borderBottomWidth: 1
  }
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  reviews: values(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user)),
  getAllReviews: id => dispatch(getAllReviews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
