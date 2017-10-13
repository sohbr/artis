import React from "react";
import { connect } from "react-redux";
import { createPost, updatePost, deletePostById } from '../../actions/post_actions';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
} from "react-native";

class PostForm extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      title: "Create a Post"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onSubmit() {
    return () => {
      const post = Object.assign({}, {
        title: this.state.title,
        body: this.state.body,
        user_id: this.props.currentUser.id
      });
      this.props.createPost(post);
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sushi_chef_Masayoshi_Kazato_02.JPG/1200px-Sushi_chef_Masayoshi_Kazato_02.JPG"}}
        />
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
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
