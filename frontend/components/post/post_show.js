import React from "react";
import { connect } from "react-redux";
import { createPost, updatePost, deletePostById } from '../../actions/post_actions';
import { RECEIVE_POST } from '../../actions/post_actions';
import ImageUpload from '../image_upload/image_upload';

import {
  StyleSheet,
  Text, View,
  TouchableHighlight,
  TextInput,
  Image,
  ScrollView,
  Dimensions
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

  render() {
    const {post} = this.props.navigation.state.params;
    return(
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: post.image_url}}/>
        <View>
          <Text style={styles.category}>{post.category}</Text>
          <Text style={styles.title}>{post.title}</Text>
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
  image: {
    height: Dimensions.get('window').height*0.3,
    borderRadius: 3
  },
  button: {
    height: 50,
    backgroundColor: "#00BCF3",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  category: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    paddingBottom: 5,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
