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
  Dimensions
} from "react-native";

class PostShow extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      title: "Unique Post"
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
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: post.image_url}}/>
        <Text>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 10
  },
  input: {
    height: 50,
    backgroundColor: "#F7F7F7",
    padding: 4,
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
  },
  textfield: {
    height: 100,
    backgroundColor: "#F7F7F7",
    padding: 4,
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray"
  },
  label: {
    color: "black"
  },
  image: {
    height: Dimensions.get('window').height*0.4
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
  title: {
    fontSize: 100,
    alignSelf: "center",
    fontWeight: "bold"
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
