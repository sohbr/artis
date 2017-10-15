import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      headerTintColor: "#C6D166"
    };
  };
  
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
    const fakeReviews = [{
      userImg: 'http://www.anime-evo.net/wp-content/uploads/2017/04/Boku2_02_3.jpg',
      userFullname: "Katsuki Bakugou",
      dateCreated: '10/11/2017',
      rating: 1,
      body: "Useless grape head... 死ね!!!"
    },
    {
      userImg: 'http://www.anime-evo.net/wp-content/uploads/2017/04/Boku2_02_3.jpg',
      userFullname: "Katsuki Bakugou",
      dateCreated: '10/11/2017',
      rating: 1,
      body: "Useless grape head... 死ね!!!"
    },
    {
      userImg: 'http://www.anime-evo.net/wp-content/uploads/2017/04/Boku2_02_3.jpg',
      userFullname: "Katsuki Bakugou",
      dateCreated: '10/11/2017',
      rating: 1,
      body: "Useless grape head... 死ね!!!"
    }
  ];

    return(
      <View>
        <TouchableWithoutFeedback onPress={this._onPress("ReviewForm")}>
          <View flexDirection={"row"} justifyContent={"flex-end"} >
            <Text size={20} >Write a review</Text>
            <FontAwesome name="pencil-square-o"  size={20} />
          </View>
        </TouchableWithoutFeedback>
        {fakeReviews.map(
          (review, i) => <ReviewIndexItem key={i} review={review}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default ReviewIndex;
