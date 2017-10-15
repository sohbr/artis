import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import StarRating from '../star_rating/star_rating';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      headerTintColor: "#C6D166"
    };
  };

  constructor(props) {
    super(props);
  }

  _onPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "ReviewForm") {
        navigate("ReviewForm", this.props.navigation.state.params[0].recipient_id);
      }
    };
  }

  render() {
    const reviews = this.props.navigation.state.params;
    return(
      <View>
        <TouchableWithoutFeedback onPress={this._onPress("ReviewForm")}>
          <View flexDirection={"row"} justifyContent={"flex-end"} >
            <Text size={20} >Write a review</Text>
            <FontAwesome name="pencil-square-o"  size={20} />
          </View>
        </TouchableWithoutFeedback>
        {reviews.map(
          (review, i) => <ReviewIndexItem key={i} currentUser={this.props.currentUser} review={review}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
