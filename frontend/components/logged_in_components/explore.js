import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import PostIndex from '../post/post_index';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button
} from "react-native";

class Explore extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      header: null
    };
  };
  constructor(props) {
    super(props);
  }

  buttonPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "PostForm") {
        navigate("PostForm");
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonPress("PostForm")}
        >
          <Text style={styles.buttonText}>Create a Post</Text>
        </TouchableHighlight>
        <PostIndex />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10
  },
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#00BCF3",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
