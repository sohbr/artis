import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import UserStar from './user_stars';

class UserInfo extends Component {
  constructor(props) {
    super(props);

  }





  render() {
    return(
        <View style={styles.userInfoContainer}>
          <Image style={styles.profileImage} source={require('../../../docs/assets/img/minoru-mineta.jpg')} />
          <View style={styles.userDetails}>
            <Text style={styles.userFullName}>Minoru Mineta</Text>
            <View style ={styles.starRating}>
              <UserStar/>
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
});

export default UserInfo;
