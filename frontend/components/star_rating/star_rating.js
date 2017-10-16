import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableWithoutFeedback, Alert } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';

class StarRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: this.props.disabled === false ? false : true,
    };

    this.starRating = this.starRating.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton() {
    this.props.callBackFromParent(this.props.pos);
  }

  // checks each el in array to assign star
  starRating(rating) {
    if (rating >= 1) {
      return <TouchableWithoutFeedback disabled={this.state.disabled} onPress={this._onPressButton}>
        <View>
        <FontAwesome style={styles.star} name="star"/>
        </View>
      </TouchableWithoutFeedback>;
    }else if (rating >= .3) {
      return <TouchableWithoutFeedback disabled={this.state.disabled} onPress={this._onPressButton}>
        <View>
        <FontAwesome style={styles.star} name="star-half-o"/>
        </View>
      </TouchableWithoutFeedback>;
    }else {
      return <TouchableWithoutFeedback disabled={this.state.disabled} onPress={this._onPressButton}>
        <View>
        <FontAwesome style={styles.star} name="star-o"/>
        </View>
      </TouchableWithoutFeedback>;
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
    color: "#C6D166"
  }
});

export default StarRating;
