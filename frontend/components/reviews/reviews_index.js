import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends Component {
  constructor(props) {
    super(props);

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
    console.log("review index props");
    console.log(this.props);
    const {reviews} = this.props;
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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
