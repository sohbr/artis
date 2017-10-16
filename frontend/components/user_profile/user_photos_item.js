import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';

class UserPhotosItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Image style={styles.photo} source={{uri: this.props.url}} />
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width: Dimensions.get('window').width*.45,
    height: Dimensions.get('window').width*.45,
    borderRadius: 10,
    margin: Dimensions.get('window').width*0.015
  }
});

export default UserPhotosItem;
