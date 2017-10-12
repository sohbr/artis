import React from "react";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button
} from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout(this.props.currentUser);
  }

  render() {
    const user = this.props.currentUser;
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
        <Text>{user.id}</Text>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
        <Text>{user.token}</Text>
        <Text>Logout doesn't work yet ):</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
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
  }
});


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: (user) => dispatch(logout(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
