import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  _onPressReviews() {

  }

  render() {
    return(
        <View style={styles.userInfoContainer}>
          <Image style={styles.profileImage} source={require('../../../docs/assets/img/minoru-mineta.jpg')} />
          <View>
            <Text style={styles.userFullName}>Minoru Mineta</Text>
            <View style ={styles.starRating}>
              <FontAwesome style={styles.star} name="star"/>
              <FontAwesome style={styles.star} name="star-half-o"/>
              <FontAwesome style={styles.star} name="star-o"/>
              <FontAwesome style={styles.star} name="star-o"/>
              <FontAwesome style={styles.star} name="star-o"/>
            </View>
            <Text onPress={this.onPressReviews}>174 Reviews</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
   width: Dimensions.get('window').width*.4,
   height: Dimensions.get('window').width*.4,
   borderRadius: Dimensions.get('window').width*.2,
   borderColor: 'gray',
   borderWidth: .5
 },
  userFullName: {
    fontSize: 20,
  },
  starRating: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  star: {
    fontSize: 30,
  }
});

export default UserInfo;
