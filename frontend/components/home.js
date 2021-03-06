import React from "react";
import { connect } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  DeviceEventEmitter
} from "react-native";

class Home extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  buttonPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "register") {
        navigate("Register");
      } else {
        navigate("Login");
      }
    };
  }

  render() {
    const user = this.props.currentUser;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Artis</Text>
        <Text></Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonPress("register")}
          underlayColor={"#5C821A"}
        >
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonPress("login")}
          underlayColor={"#5C821A"}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
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
    backgroundColor: "#C6D166",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  title: {
    fontSize: 100,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#5C821A"
  }
});

var mapStateToProps = (state) => {
  return {
  };
};

var mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
