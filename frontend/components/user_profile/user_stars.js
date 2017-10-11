import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.starRating = this.starRating.bind(this);
    this.starAssignment = this.starAssignment.bind(this);
  }

  starRating() {
    // for (var i = 0; i < 5; i++) {
      let fakeRating = 1.6;
      this.starAssignment(fakeRating);
    // }
  }

  starAssignment(float) {
    let rating = float;
    if (rating >= 1) {
      return <FontAwesome style={styles.star} name="star"/>;
    }else if (rating >= .3) {
      return <FontAwesome style={styles.star} name="star-half-o"/>;
    }else {
      return <FontAwesome style={styles.star} name="star-o"/>;
    }
  }
}

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  star: {
    fontSize: 30,
  }
});

export default StarRating;
