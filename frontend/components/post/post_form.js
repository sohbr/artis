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

class PostForm extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      title: "Create a Post",
      headerTintColor: "#C6D166"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image: null
    };
  }

  onSubmit() {
    const { navigate } = this.props.navigation;
    return () => {
      let uriParts = this.state.image.split('.');
      let fileType = uriParts[uriParts.length - 1];
      const formData = new FormData();
      formData.append("post[title]", this.state.title);
      formData.append("post[body]", this.state.body);
      formData.append("post[user_id]", this.props.currentUser.id);
      formData.append("post[image]", {
        uri: this.state.image,
        name: `${this.state.title}.${fileType}`,
        type: `image/${fileType}`,
      });
      this.props.createPost(formData).then((res) => {
        if (res.type) {
          navigate("Explore");
        }
      });
    };
  }

  updatePostWithImage() {
    return (imageUri) => {
      this.setState({image: imageUri});
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.image}>
          <ImageUpload updatePostWithImage={this.updatePostWithImage()} />
        </View>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          placeholder="Title"
          style={styles.input}
          underlineColorAndroid={'transparent'}
        />
        <Text style={styles.label}>
          {this.state.title}
        </Text>
        <TextInput
          onChangeText={(body) => this.setState({body})}
          placeholder="Post a description."
          style={styles.textfield}
          multiline={true}
          underlineColorAndroid={'transparent'}
          textAlignVertical={"top"}
        />
        <Text style={styles.label}>
          {this.state.body}
        </Text>
        <TouchableHighlight style={styles.button} onPress={this.onSubmit()}>
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableHighlight>
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
    backgroundColor: "#C6D166",
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
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
