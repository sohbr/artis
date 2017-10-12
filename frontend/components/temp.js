import React from "react";
import { connect } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";

class TempExplore extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonPress(type) {
    console.log(this.props.navigation);
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
        <Text>Temp Explore Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonPress("PostForm")}
        >
          <Text style={styles.buttonText}>Create a Post</Text>
        </TouchableHighlight>
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
  },
  title: {
    fontSize: 100,
    alignSelf: "center",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TempExplore);
