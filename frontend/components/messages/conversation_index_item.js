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

class ConversationIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.conversation.personal_messages;
    const other_use = this.props.conversation.subscriptions;
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{this.props.username}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  ConversationIndexItem
);
