import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import UserInfo from "./user_info";

class UserShow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ScrollView style={{backgroundColor: "yellow", paddingTop: 30}}>
        <UserInfo/>
      </ScrollView>
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


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
