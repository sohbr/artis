import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, Alert, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.floatToArray = this.floatToArray.bind(this);
  }

  floatToArray () {
    let rating = this.props.rating;
    let arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(rating);
      rating--;
    }
    return arr;
  }

  _onPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "ReviewIndex") {
        navigate("ReviewIndex", this.props.reviews);
      }
    };
}


  render() {
    const {currentUser, reviewsCount} = this.props;
    return(
        <View style={styles.userInfoContainer}>
          <Image style={styles.profileImage} source={{uri: this.props.userImg}} />
          <View style={styles.userDetails}>
            <Text style={styles.userFullName}>{currentUser.username}</Text>
            <View style={styles.starRating}>
            {this.floatToArray().map(
              (score,i) => <StarRating key={i} score={score}/>
            )}
            </View>
              <Text style={styles.reviewCount} onPress={this._onPress("ReviewIndex")}>{reviewsCount} Reviews</Text>
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
    backgroundColor: '#C6D166',
    padding: 20
  },
  profileImage: {
   width: Dimensions.get('window').width*.5,
   height: Dimensions.get('window').width*.5,
   borderRadius: Dimensions.get('window').width*.25,
   borderColor: 'gray',
   borderWidth: .5,
   marginRight: 15
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
