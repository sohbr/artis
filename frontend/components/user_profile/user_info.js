import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.floatToArray = this.floatToArray.bind(this);
  }

  floatToArray () {
    let rating = 1.6;
    let arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(rating);
      rating--;
    }
    return arr;
  }

  render() {
    return(
        <View style={styles.userInfoContainer}>
          <Image style={styles.profileImage} source={require('../../../docs/assets/img/minoru-mineta.jpg')} />
          <View style={styles.userDetails}>
            <Text style={styles.userFullName}>Minoru Mineta</Text>
            <View style={styles.starRating}>
            {this.floatToArray().map(score => <StarRating score={score}/>)}
            </View>
            <Text style={styles.reviewCount} onPress={this.onPressReviews}>174 Reviews</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
   width: Dimensions.get('window').width*.5,
   height: Dimensions.get('window').width*.5,
   borderRadius: Dimensions.get('window').width*.25,
   borderColor: 'gray',
   borderWidth: .5
 },
 userDetails: {
   justifyContent: 'center',
 },
  userFullName: {
    fontSize: 20,
  },
  starRating: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  reviewCount: {
    textDecorationLine: 'underline',
  },
});

export default UserInfo;
