import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import UserPhotosItem from './user_photos_item';

const imageURLs = ["http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
"http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg",
];

class UserPhotosIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.userPhotosContainer}>
        {imageURLs.map(url => <UserPhotosItem url={url}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userPhotosContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default UserPhotosIndex;
