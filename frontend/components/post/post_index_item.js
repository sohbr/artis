import { connect } from 'react-redux';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
} from "react-native";

export default class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
      <View style={styles.container}>
        <Text>{post.image_url}</Text>
        <Text>{post.title}</Text>
        <Text>{post.body}</Text>
        <Text>{post.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "lightblue",
    marginBottom: 10
  },
});
