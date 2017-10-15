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

    };
  }

  render() {
    return (
      <View>
        <ScrollView
        style={styles.container}
        horizontal={true}
        bounces={false}
        >
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Hello</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Hello</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Hello</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Hello</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Hello</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Hello</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#C6D166",
    backgroundColor: "white"
  }, button: {
    height: 30,
    backgroundColor: "white",
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
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFilter);
