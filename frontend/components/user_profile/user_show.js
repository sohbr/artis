import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import UserInfo from "./user_info";
import UserPhotosIndex from "./user_photos_index";

class UserShow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ScrollView style={{backgroundColor: "yellow", paddingTop: 30}}>
        <UserInfo style={styles.userInfo}/>
        <View style={styles.hr}/>
        <UserPhotosIndex/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
  },
  userInfo: {
    justifyContent: "center",
  },
  hr: {
    width: Dimensions.get('window').width*.9,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
