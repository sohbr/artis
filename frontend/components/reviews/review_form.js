import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';

class ReviewForms extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const fakeReviews = [{
      userImg: 'http://www.anime-evo.net/wp-content/uploads/2017/04/Boku2_02_3.jpg',
      userFullname: "Katsuki Bakugou",
      dateCreated: '10/11/2017',
      rating: 1,
      body: "Useless grape head... 死ね!!!"
    },
    {
      userImg: 'http://www.anime-evo.net/wp-content/uploads/2017/04/Boku2_02_3.jpg',
      userFullname: "Katsuki Bakugou",
      dateCreated: '10/11/2017',
      rating: 1,
      body: "Useless grape head... 死ね!!!"
    },
    {
      userImg: 'http://www.anime-evo.net/wp-content/uploads/2017/04/Boku2_02_3.jpg',
      userFullname: "Katsuki Bakugou",
      dateCreated: '10/11/2017',
      rating: 1,
      body: "Useless grape head... 死ね!!!"
    },
  ];
  
    return(

    )
  }
}

export default ReviewForms;
