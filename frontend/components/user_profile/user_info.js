import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <View style={styles.userInfoContainer}>
          <Image style={styles.userPic} source={require('../../../docs/assets/img/minoru-mineta.jpg')} />
          <View>
            <Text style={styles.userFullName}>Minoru Mineta</Text>
            <View style ={styles.starRating}>
              <FontAwesome name="star"/>
              <FontAwesome name="star-half-o"/>
              <FontAwesome name="star-o"/>
              <FontAwesome name="star-o"/>
              <FontAwesome name="star-o"/>
            </View>
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
  userPic: {
    height: 150,
    borderRadius: 50,
    width: 150,
  },
  userFullName: {
    fontSize: 20,
  },
  starRating: {
    flexDirection: 'row',
  }
});

export default UserInfo;
