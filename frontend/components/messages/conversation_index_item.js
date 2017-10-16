import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

const NAMES = [
  "David",
  "Jimmy",
  "Nixon",
  "Brian",
  "Rebekah",
  "Tommy",
  "Betty",
  "Jerry",
  "Adrian",
  "Tyler",
  "Mike",
  "Cindy",
  "Christina",
  "Sean"
];

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

class ConversationIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.conversation.personal_messages;
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>
          {NAMES[Math.floor(Math.random() * 14)]}
        </Text>
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
    paddingRight: 10,
    fontSize: 18,
    color: "white"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  ConversationIndexItem
);
