import { connect } from 'react-redux';
import React from 'react';
import { getAllPosts, RECEIVE_POSTS, searchPosts } from '../../actions/post_actions';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Button,
  Dimensions,
  ActivityIndicator,
  TabNavigator
} from "react-native";

class PostFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterSelect(searchFilter) {
    return () => {
      if (searchFilter === "All") {
        this.props.getAllPosts();
      } else {
        this.props.searchPosts(searchFilter);
      }
    };
  }

  render() {
    const filterItems = categories.map((category) => {
      return (
        <TouchableHighlight
          style={styles.button}
          underlayColor={"#5C821A"}
          onPress={this.handleFilterSelect(`${category}`)}
          key={`${category}`}
        >
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableHighlight>)
      ;
    });
    return (
      <View>
        <ScrollView
        style={styles.container}
        horizontal={true}
        bounces={false}
        >
          {filterItems}
        </ScrollView>
      </View>
    );
  }
}

const categories = [
  "All", "Cosmetology", "Culinary", "Art/Design", "Automotive", "Massage Therapy", "Animal Care",
  "Fitness/Nutrition", "Travel/Tourism", "Film/Photography"
];

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#C6D166",
    backgroundColor: "white"
  }, button: {
    backgroundColor: "white",
    padding: 10,
    marginRight: 5
  }, buttonText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#C6D166"
  }
});

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFilter);
