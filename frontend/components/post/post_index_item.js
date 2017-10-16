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
      navigate("PostShow", {post: this.props.post, hidesave: this.props.hidesave});
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
          <Text style={styles.textCategory}>{post.category}</Text>
          <Text style={styles.text}>{post.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C6D166"
  },
  image: {
    height: Dimensions.get('window').height*0.3,
    borderRadius: 3
  },
  text: {
    padding: 5,
    color: "#0F1B07"
  },
  textCategory: {
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#5C821A"
  }
});
