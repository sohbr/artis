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
  Dimensions,
  TouchableOpacity
} from "react-native";

export default class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onItemPress() {
    const { navigate } = this.props.navigation;
    return () => {
      navigate("PostShow", {post: this.props.post});
    };
  }

  render() {
    const post = this.props.post;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onItemPress()}>
        <View>
          <Image style={styles.image} source={{uri: post.image_url}}/>
        </View>
        <View>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      </TouchableOpacity>
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
