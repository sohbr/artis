import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import values from 'lodash/values';
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';
import ReviewIndexItem from './review_index_item';
import { getAllReviews } from '../../actions/review_actions';
import asReviewsArray from '../../reducers/selector';

class ReviewIndex extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.getAllReviews();
  }

  _onPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "ReviewForm") {
        navigate("ReviewForm");
      }
    };
  }

  render() {
    const {reviews} = this.props;
    console.log(reviews);
    return(
      <View>
        <TouchableWithoutFeedback onPress={this._onPress("ReviewForm")}>
          <View flexDirection={"row"} justifyContent={"flex-end"} >
            <Text size={20} >Write a review</Text>
            <FontAwesome name="pencil-square-o"  size={20} />
          </View>
        </TouchableWithoutFeedback>
        {this.props.reviews.map(
          (review, i) => <ReviewIndexItem key={i} review={review}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    reviews: values(state.entities.reviews)
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: () => dispatch(getAllReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
