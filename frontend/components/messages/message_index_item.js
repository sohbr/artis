import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

class MessageIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{this.props.message.user_id}</Text>
        <Text style={styles.message}>{this.props.message.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  message: {
    color: "#0F1B07",
    fontSize: 18
  },
  sender: {
    fontWeight: "bold",
    color: "#0F1B07",
    paddingRight: 10
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndexItem);
