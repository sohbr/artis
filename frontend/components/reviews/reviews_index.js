import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import values from 'lodash/values';
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';
import ReviewIndexItem from './review_index_item';
import { deleteReviewById, getAllReviews } from '../../actions/review_actions'


class ReviewIndex extends Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      headerTintColor: "#C6D166"
    };
  };

  constructor(props) {
    super(props);

    this.checkIfCurrentUserProfile = this.checkIfCurrentUserProfile.bind(this)
  }

  componentWillMount() {
    this.props.getAllReviews(1);
  }

  checkIfCurrentUserProfile() {
    if (this.props.navigation.state.params.prevStateKey === "Profile") {
      return (
        <View/>
      )
    } else {
      return (
        <TouchableWithoutFeedback onPress={this._onPress("ReviewForm")}>
          <View flexDirection={"row"} justifyContent={"flex-end"} >
            <Text size={20} >Write a review</Text>
            <FontAwesome name="pencil-square-o"  size={20} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }


  _onPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "ReviewForm") {
        navigate("ReviewForm", this.props.navigation.state.params[0].recipient_id);
      }
    };
  }

  render() {
    const reviews = this.props.reviews;
    reviews.pop()
    return(
      <View>
        {this.checkIfCurrentUserProfile()}
        {reviews.map(
          (review, i) => <ReviewIndexItem
            key={i}
            currentUser={this.props.currentUser}
            review={review}
            deleteReviewById={this.props.deleteReviewById}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => ({
  reviews: values(state.entities.reviews),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  deleteReviewById: (id) => dispatch(deleteReviewById(id)),
  getAllReviews: (id) => dispatch(getAllReviews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);

// <TouchableWithoutFeedback onPress={this._onPress("ReviewForm")}>
//   {this.checkIfCurrentUserProfile()}
// </TouchableWithoutFeedback>
