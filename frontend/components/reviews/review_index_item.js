import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';

class ReviewIndexItem extends Component {
  constructor(props) {
    super(props);

    this.floatToArray = this.floatToArray.bind(this);
  }

  floatToArray (rating) {
    let arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(rating);
      rating--;
    }
    return arr;
  }

  render() {

    return(
      <View>
        <View style={styles.reviewIndexItemContainer}>
          <Image style={styles.profileImage} source={{uri: this.props.review.userImg}} />
          <View>
            <View style={styles.nameAndDate}>
              <Text style={styles.userFullName}>{this.props.review.userFullname}</Text>
              <Text>{this.props.review.dateCreated}</Text>
            </View>
            <View style={styles.starRating}>
              {this.floatToArray(this.props.review.rating).map(score => <StarRating score={score}/>)}
            </View>
            <Text>{this.props.review.body}</Text>
          </View>
        </View>
        <View style={styles.hr}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reviewIndexItemContainer: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  profileImage: {
   width: Dimensions.get('window').width*.2,
   height: Dimensions.get('window').width*.2,
   borderRadius: Dimensions.get('window').width*.1,
   borderColor: 'gray',
   borderWidth: .5
 },
 nameAndDate: {
   width: Dimensions.get('window').width*.8,
   flexDirection: 'row',
   justifyContent: 'space-between',
 },
 userFullName: {
   fontWeight: "bold"
 },
 starRating: {
   flexDirection: 'row',
 },
 hr: {
   width: Dimensions.get('window').width*1,
   borderBottomColor: 'black',
   borderBottomWidth: 1,
   marginTop: 10,
 },
});

export default ReviewIndexItem;
