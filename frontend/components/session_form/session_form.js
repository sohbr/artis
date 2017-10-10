import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/session_actions";
import SessionErrors from "./session_errors";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  AsyncStorage
} from "react-native";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      errors: []
    };
  }

  onRegister() {
    return () => {
      const user = Object.assign({},{
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      });
      this.props.register(user).then((res) => {
      }, (errors) => {
        debugger;
        this.setState({errors: errors});
      });
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          style={styles.input}
          />
        <Text style={styles.label}>
          {this.state.email}
        </Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          placeholder="Username"
          style={styles.input}
        />
        <Text style={styles.label}>
          {this.state.username}
        </Text>
        <TextInput
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />
        <Text style={styles.label}>
          {this.state.password}
        </Text>

        <TouchableHighlight style={styles.button} onPress={this.onRegister()}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>

        <SessionErrors errors={this.state.errors}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 10,
    paddingTop: 80
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
  }
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
