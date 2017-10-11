import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';

class StarRating extends Component {
  constructor(props) {
    super(props);

    this.starRating = this.starRating.bind(this);
  }

  starRating(rating) {
    if (rating >= 1) {
      return <FontAwesome style={styles.star} name="star"/>;
    }else if (rating >= .3) {
      return <FontAwesome style={styles.star} name="star-half-o"/>;
    }else {
      return <FontAwesome style={styles.star} name="star-o"/>;
    }
  }

  render() {
    return (
      this.starRating(this.props.score)
    );
  }
}


const styles = StyleSheet.create({
  star: {
    fontSize: 30,
  }
});

export default StarRating;
