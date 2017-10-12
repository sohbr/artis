import React from "react";
import { connect } from "react-redux";
import { register, clearSessionErrors, RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import SessionErrors from "./session_errors";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";

class RegisterForm extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: "Register"
  });

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      errors: []
    };
  }

  componentWillMount() {
    if (this.props.errors.length > 0) {
      this.props.clearSessionErrors();
    }
  }

  onRegister() {
    const { navigate } = this.props.navigation;
    return () => {
      const user = Object.assign({},{
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      });
      this.props.register(user).then((res) => {
        if (res && res.type === RECEIVE_CURRENT_USER) {
          navigate("TempExplore");
        }
      });
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Artis</Text>
        <TextInput
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          style={styles.input}
          underlineColorAndroid={'transparent'}
          />
        <Text style={styles.label}>
          {this.state.email}
        </Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          placeholder="Username"
          style={styles.input}
          underlineColorAndroid={'transparent'}
        />
        <Text style={styles.label}>
          {this.state.username}
        </Text>
        <TextInput
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          underlineColorAndroid={'transparent'}
        />
        <Text style={styles.label}>
          {this.state.password}
        </Text>

        <TouchableHighlight style={styles.button} onPress={this.onRegister()}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>

        <SessionErrors errors={this.props.errors}/>
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
    padding: 10,
  },
  input: {
    height: 50,
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
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(register(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
