import React from "react";
import { connect } from "react-redux";
import { createPost, updatePost, deletePostById } from '../../actions/post_actions';
import { RECEIVE_POST } from '../../actions/post_actions';
import ImageUpload from '../image_upload/image_upload';
import { createBookmark, getBookmarkedPosts } from '../../actions/bookmark_actions';

import {
  StyleSheet,
  Text, View,
  TouchableHighlight,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";

class PostShow extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      headerTintColor: "#C6D166"
    };
  };

  constructor(props) {
    super(props);
  }

  updatePostWithImage() {
    return (imageUri) => {
      this.setState({image: imageUri});
    }
  }

  handleSave(post) {
    return () => {
      const getBookmarkedPosts = this.props.getBookmarkedPosts;
      const currentUser = this.props.currentUser;
      this.props.createBookmark(currentUser.id, post.id)
        .then(() => Alert.alert("Post saved!"));

    };
  }

  handleConnect() {
    return() => {

    };
  }

  render() {
    const {post} = this.props.navigation.state.params;
    return(
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: post.image_url}}/>
        <View>
          <Text style={styles.category}>{post.category}</Text>
          <Text style={styles.title}>{post.title}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button1}
            underlayColor={"#5C821A"}
            onPress={this.handleSave(post)}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button2}
            underlayColor={"#5C821A"}
            onPress={this.handleConnect()}>
            <Text style={styles.buttonText}>Connect</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.body}>{post.body}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    height: Dimensions.get('window').height*0.3,
    borderRadius: 3
  },
  button1: {
    height: 30,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#C6D166",
    justifyContent: "center",
    alignItems: "center"
  },
  button2: {
    height: 30,
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#C6D166",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  category: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "#5C821A",
    fontWeight: "bold",
  },
  title: {
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F1B07"
  },
  description: {
    paddingTop: 15,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    color: "#5C821A"
  },
  body: {
    fontSize: 16,
    color: "#0F1B07"
  }
});

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (userId, postId) => dispatch(createBookmark(userId, postId)),
  getBookmarkedPosts: (token) => dispatch(getBookmarkedPosts(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
