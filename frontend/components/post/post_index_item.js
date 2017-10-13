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
    console.log(post.image_url);
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: post.image_url}}/>
        </View>
        <View>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "lightblue",
    marginBottom: 10
  },
  image: {
    height: 50,
    width: 50
  }
});
