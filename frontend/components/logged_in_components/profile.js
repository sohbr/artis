import React from "react";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { UserProfileStack } from '../user_profile/user_profile_stack';

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
  }

  render() {
    return (
      <UserProfileStack screenProps={{prevStateKey: this.props.navigation.state.key}} />
    );
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
