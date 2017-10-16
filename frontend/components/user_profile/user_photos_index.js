import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import UserPhotosItem from './user_photos_item';

class UserPhotosIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const photos = this.props.photos.map((photo, i) => {
      return <UserPhotosItem key={`photo-${i}`} url={photo.image_url}/>;
    });
    return(
      <View style={styles.userPhotosContainer}>
        {photos}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userPhotosContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    marginTop: 10
  },
});

const mapStateToProps = state => {
  return {
    photos: state.session.currentUser.photos
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotosIndex);
